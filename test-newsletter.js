// Test newsletter subscription endpoint
async function testNewsletter() {
    try {
        console.log('🧪 Testing newsletter subscription...');
        
        const testData = { email: 'test@example.com' };
        
        const response = await fetch('http://localhost:3001/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });
        
        const result = await response.json();
        
        console.log('📧 Response status:', response.status);
        console.log('📧 Response result:', result);
        
        if (result.success) {
            console.log('✅ Newsletter subscription test successful!');
        } else {
            console.log('❌ Newsletter subscription test failed');
        }
    } catch (error) {
        console.error('❌ Test error:', error.message);
    }
}

testNewsletter();
