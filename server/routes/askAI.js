const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
require('dotenv').config(); // Ensure environment variables are loaded

dotenv.config();


// Initialize Google Generative AI client with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY); // Directly passing the API key

router.post("/askAI", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    // Fetch the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate a response
    const result = await model.generateContent(question);

    // Log and check the structure of the result for debugging
    // console.log("AI Response:", result);

    // Access the candidates array and inspect its structure
    const candidates = result?.response?.candidates;

    if (candidates && candidates.length > 0) {
      const content = candidates[0]?.content; // Accessing the content object
      const parts = content?.parts; // Accessing the parts array
      const responseText = parts && parts.length > 0 ? parts[0]?.text : "No text available"; // Getting the text from the first part

      res.status(200).json({ response: responseText });
    } else {
      res.status(500).json({ error: "Failed to generate AI response" });
    }

  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
});

module.exports = router;
