// api/sms.js
module.exports = (req, res) => {
    // Log the entire incoming request body to check if it's being received
    console.log('Received request body:', req.body);

    const sender = req.body.sender;
    const message = req.body.message;

    if (sender && message) {
        console.log(`Received SMS from: ${sender}`);
        console.log(`Message: ${message}`);
        res.status(200).json({ status: 'Success', message: 'SMS data received' });
    } else {
        console.log('Invalid data received');
        res.status(400).json({ status: 'Error', message: 'Invalid data' });
    }
};
