const express = require('express');
const app = express();

// This route will serve "Hello World" when the root URL is accessed
app.get('/', (req, res) => {
    res.status(200).send('Hello World from the main page!');
});

// Export the app as a module to be used by Vercel
module.exports = app;
