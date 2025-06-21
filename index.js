// Import the express library, which is a minimal and flexible Node.js web application framework.
const express = require("express");

// Create an instance of an Express application.
const app = express();

// Define the port the server will run on.
// It's a good practice to use an environment variable for the port,
// with a fallback for local development.
const PORT = process.env.PORT || 3000;

// Define a route handler for GET requests to the root URL ('/').
// When a user visits the root of your site, this function will be called.
app.get("/", (req, res) => {
  res.status(200).send("Hello, World! This is a sample Express server 101.");
});

// Define another route for demonstration purposes that returns JSON.
app.get("/api/data", (req, res) => {
  res.status(200).json({
    message: "Here is some sample JSON data.",
    timestamp: new Date().toISOString(),
  });
});

// Start the server and make it listen for incoming connections on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
