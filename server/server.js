require('dotenv').config();
const express = require('express');
const { Resend } = require('resend');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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

// Resend email service configuration
let emailServiceEnabled = false;

// Check if Resend API key is configured
if (process.env.RESEND_API_KEY) {
    emailServiceEnabled = true;
    console.log('✅ Resend email service is configured');
} else {
    console.log('⚠️  Resend API key not found - forms will work but emails won\'t be sent');
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

        // Email options (removed - using Resend directly)

        // Send email only if email service is enabled
        if (emailServiceEnabled) {
            try {
                // Send email to admin
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: process.env.EMAIL_USER || 'shallommsila@gmail.com',
                    subject: emailSubject,
                    html: emailContent
                });
                
                // Send confirmation email to the sender
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: email,
                    subject: 'Thank you for contacting Shallom Sila',
                    html: `
                        <h2>Thank You for Reaching Out!</h2>
                        <p>Dear ${name},</p>
                        <p>We have received your message and will get back to you as soon as possible.</p>
                        <p>Best regards,<br>The Shallom Sila Team</p>
                    `
                });
                console.log(`✅ Email sent successfully to ${email}`);
            } catch (emailError) {
                console.error('Failed to send email:', emailError.message);
                // Continue with success response even if email fails
            }
        } else {
            console.log(`📝 Form submission received (email service not enabled): ${name} - ${email}`);
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
        if (emailServiceEnabled) {
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: process.env.EMAIL_USER || 'shallommsila@gmail.com',
                subject: "New Newsletter Subscription",
                html: `<p>New subscriber: ${email}</p>` 
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
            if (emailServiceEnabled) {
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: process.env.EMAIL_USER || 'shallommsila@gmail.com',
                    subject: 'New Newsletter Subscription',
                    html: `<p>New newsletter subscriber: ${email}</p>`
                });
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
    console.log(`Resend email service: ${emailServiceEnabled ? '✅ Enabled' : '❌ Disabled'}`);
});
