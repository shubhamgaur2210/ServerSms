// api/sms.js
const bodyParser = require('body-parser');

module.exports = (req, res) => {
    // Ensure the request body is parsed correctly
    if (req.method === 'POST') {
        const sender = req.body?.sender;
        const message = req.body?.message;

        if (sender && message) {
            console.log(`Received SMS from: ${sender}`);
            console.log(`Message: ${message}`);
            res.status(200).json({ status: 'Success', message: 'SMS data received' });
        } else {
            console.log('Invalid data received');
            res.status(400).json({ status: 'Error', message: 'Invalid data' });
        }
    } else {
        res.status(405).json({ status: 'Error', message: 'Method not allowed' });
    }
};
