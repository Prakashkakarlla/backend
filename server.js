// Import the express module
const express = require('express');

// Create an instance of an express application
const app = express();

// Define the port
const PORT = 5000;

// Set up a simple route that sends "Hello World" as a response
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
