const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // To allow CORS if frontend and backend are on different servers
require('dotenv').config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());



// Enable CORS for requests from your frontend
app.use(cors({
    origin: 'https://prakashkakarlla.github.io/Prakashkakarlla', // Allow only your frontend origin
}));


app.get('/', (req, res) => {
    res.send('Hello World');
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS, // replace with your email password
    },
});

//user: 'kakarllaprakash108@gmail.com', // replace with your email
//pass: 'dgmt bfoy xied lniw', // replace with your email password


// POST route to handle form submissions
app.post('/send', (req, res) => {
    const { name, email, subject, description } = req.body;

    const mailOptions = {
        from: email,
        to: `${email}`, // replace with the recipient email
        subject: `Subject ${subject}`,
        text: `Name: ${name}\n\nDescription:\n${description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending mail:', error); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
    
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
