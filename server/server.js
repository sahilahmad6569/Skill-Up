const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const academicRoutes = require('./routes/academic');
const askAIRoute = require("./routes/askAI");
const { exec } = require('child_process'); // For executing code
const fs = require('fs'); // Import the fs module to handle file operations
require('dotenv').config(); // Ensure environment variables are loaded


// Initialize dotenv to load environment variables
dotenv.config(); 

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend requests from different origins
app.use(express.json()); // Parse incoming JSON data




// Register routes
app.use('/api/auth', authRoutes);


// Register academic-related routes
app.use('/api', academicRoutes);
// Route for AskAI
app.use("/api", askAIRoute);
// Python Code Execution Endpoint
app.post('/api/execute', (req, res) => {
  const { code, language } = req.body; // Use language as well

  if (!code || !language) {
    return res.status(400).json({ error: 'Code or language not provided' });
  }

  // Define the path based on the language
  let path;
  switch (language) {
    case 'python':
      path = './temp.py';
      break;
    case 'c':
      path = './temp.c';
      break;
    case 'cpp':
      path = './temp.cpp';
      break;
    case 'java':
      path = './Temp.java';
      break;
    default:
      return res.status(400).json({ error: 'Unsupported language' });
  }

  try {
    fs.writeFileSync(path, code);

    let execCommand;
    switch (language) {
      case 'python':
        execCommand = `python3 ${path}`;
        break;
      case 'c':
        execCommand = `gcc ${path} -o temp && ./temp`;
        break;
      case 'cpp':
        execCommand = `g++ ${path} -o temp && ./temp`;
        break;
      case 'java':
        execCommand = `javac ${path} && java Temp`;
        break;
      default:
        return res.status(400).json({ error: 'Unsupported language' });
    }

    // Execute the code
    exec(execCommand, (error, stdout, stderr) => {
      // Delete the temporary file after execution
      fs.unlinkSync(path);

      if (error) {
        return res.status(500).json({ error: stderr || 'Execution error' });
      }

      res.json({ output: stdout });
    });
  } catch (err) {
    return res.status(500).json({ error: 'Error during code execution' });
  }
});

// Basic route
app.get('/', (req, res) => {
  res.send('IU CodeLab Backend is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});