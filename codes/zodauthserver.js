const express = require('express');
const app = express();
const zod = require('zod');

// Define the schema for validation
const schema = zod.object({
  username: zod.string().max(30),
  email: zod.string().email()
});

// Middleware for parsing JSON data
app.use(express.json());

// Handle POST request to root endpoint
app.post("/", (req, res) => {
  const { username, email, } = req.body;

  const result = schema.safeParse({ username, email });

  if (result.success) {
    res.status(200).json({ message: "Authentication successful" });
  } else {
    res.status(400).json({ error: "Invalid credentials", details: result.error });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running successfully on port 3000`);
});
