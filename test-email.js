require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('Testing email functionality...');
console.log('Email User:', process.env.EMAIL_USER);

async function testEmail() {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Verify connection
        console.log('Verifying email configuration...');
        await transporter.verify();
        console.log('✅ Email configuration verified successfully');

        // Send test email
        console.log('Sending test email...');
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: '🧪 Test Email - Shallom Sila Website',
            html: `
                <h2>Test Email from Contact Form</h2>
                <p>This is a test email to verify the email functionality is working.</p>
                <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
                <hr>
                <p>If you receive this email, the contact form should be working!</p>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', result.messageId);
        console.log('Response:', result.response);

    } catch (error) {
        console.error('❌ Email test failed:', error.message);
        console.error('Full error:', error);
    }
}

testEmail();
