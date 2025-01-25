const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("XKqf2gmHD8"); // Replace with your actual API key
const model = genAI.getModel("gemini-pro");

app.use(express.json());

app.post('/api/gemini', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const result = await model.generateContent(userMessage);
    const responseText = result.response.text();
    res.json({ response: responseText });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});
