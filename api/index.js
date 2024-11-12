const express = require('express');
const app = express();

// Define a route that serves "Hello World" at the root URL
app.get('/', (req, res) => {
    res.status(200).send('Hello World from the main page!');
});

// Export the app for use in Vercel's serverless environment
module.exports = app;
