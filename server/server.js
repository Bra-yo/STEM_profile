require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Create email transporter
let transporter = null;

// Try to create email transporter, but don't fail if credentials are wrong
try {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000
    });

    // Verify email configuration
    transporter.verify((error, success) => {
        if (error) {
            console.error('Email configuration error:', error.message);
            console.log('⚠️  Email service not configured - forms will work but emails won\'t be sent');
        } else {
            console.log('✅ Email server is ready to send messages');
        }
    });
} catch (error) {
    console.error('Failed to create email transporter:', error.message);
    console.log('⚠️  Email service disabled - forms will work but emails won\'t be sent');
}

// Contact form endpoint
app.post('/send-message', async (req, res) => {
    try {
        const { name, email, subject, message, formType, orgName, contactPerson, phone, orgType, partnershipType } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please fill in all required fields' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }

        // Create email content based on form type
        let emailSubject = subject || 'New Contact Form Submission';
        let emailContent = '';

        if (formType === 'partnership') {
            emailSubject = `New Partnership Inquiry: ${orgName || 'Unknown Organization'}`;
            emailContent = `
                <h2>New Partnership Inquiry</h2>
                <p><strong>Organization:</strong> ${orgName || 'Not provided'}</p>
                <p><strong>Contact Person:</strong> ${contactPerson || name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Organization Type:</strong> ${orgType || 'Not provided'}</p>
                <p><strong>Partnership Interest:</strong> ${partnershipType || 'Not provided'}</p>
                <h3>Message:</h3>
                <p>${message}</p>
            `;
        } else {
            emailContent = `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
                <h3>Message:</h3>
                <p>${message}</p>
            `;
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to the same email (can be changed)
            subject: emailSubject,
            html: emailContent
        };

        // Send email only if transporter is configured
        if (transporter) {
            try {
                await transporter.sendMail(mailOptions);
                
                // Send confirmation email to the sender
                const confirmationMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: 'Thank you for contacting Shallom Sila',
                    html: `
                        <h2>Thank You for Reaching Out!</h2>
                        <p>Dear ${name},</p>
                        <p>We have received your message and will get back to you as soon as possible.</p>
                        <p>Best regards,<br>The Shallom Sila Team</p>
                        <hr>
                        <p><small>This is an automated message. Please do not reply to this email.</small></p>
                    `
                };

                await transporter.sendMail(confirmationMailOptions);
                console.log(`✅ Email sent successfully to ${email}`);
            } catch (emailError) {
                console.error('Failed to send email:', emailError.message);
                // Continue with success response even if email fails
            }
        } else {
            console.log(`📝 Form submission received (email not configured): ${name} - ${email}`);
        }

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later.' 
        });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Simple newsletter subscription endpoint
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    console.log('🔍 /subscribe request received');
    console.log('📧 Request body:', req.body);

    if (!email) {
        console.log('❌ No email provided');
        return res.json({ success: false });
    }

    try {
        // Send notification email to admin
        if (transporter) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "New Newsletter Subscription",
                text: `New subscriber: ${email}` 
            });
            console.log(`✅ Notification email sent for: ${email}`);
        }

        console.log('✅ Subscription successful');
        return res.json({ success: true });

    } catch (error) {
        console.error('❌ Subscription error:', error);
        return res.json({ success: false });
    }
});

// Newsletter subscription endpoint (backup)
app.post('/newsletter-subscribe', async (req, res) => {
    try {
        console.log('🔍 Newsletter subscription request received');
        console.log('📧 Request body:', req.body);
        
        const { email } = req.body;
        console.log('📧 Extracted email:', email);

        // Validate email
        if (!email) {
            console.log('❌ No email provided');
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('❌ Invalid email format:', email);
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }

        // Log subscription (in real implementation, you'd save to database)
        console.log(`✅ Newsletter subscription successful: ${email}`);
        
        // Send notification email to admin
        try {
            if (transporter) {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: 'New Newsletter Subscription',
                    text: `New newsletter subscriber: ${email}`
                };

                await transporter.sendMail(mailOptions);
                console.log(`✅ Notification email sent to admin`);
            }
        } catch (emailError) {
            console.error('Failed to send notification email:', emailError.message);
        }

        console.log('📧 Sending success response');
        res.json({ 
            success: true, 
            message: 'Successfully subscribed to newsletter!' 
        });

    } catch (error) {
        console.error('❌ Newsletter subscription error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to subscribe. Please try again later.' 
        });
    }
});

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Email service configured for: ${process.env.EMAIL_USER ? process.env.EMAIL_USER : 'Not configured'}`);
});
