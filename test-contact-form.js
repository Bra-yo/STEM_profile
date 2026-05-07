require('dotenv').config();

async function testContactForm() {
    try {
        console.log('Testing contact form endpoint...');
        
        const testData = {
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Contact Form Submission',
            message: 'This is a test message from the contact form.'
        };

        const response = await fetch('http://localhost:3001/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        const result = await response.json();
        console.log('Response status:', response.status);
        console.log('Response result:', result);

        if (result.success) {
            console.log('✅ Contact form test successful!');
        } else {
            console.log('❌ Contact form test failed:', result.message);
        }
    } catch (error) {
        console.error('❌ Contact form test error:', error.message);
    }
}

testContactForm();
