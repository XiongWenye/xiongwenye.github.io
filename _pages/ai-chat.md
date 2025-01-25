---
title: AI Chat
permalink: /ai-chat/
layout: default
---

<!DOCTYPE html>
<html>
<head>
    <title>Web AI Server</title>
</head>
<body>
    <h1>Web AI Chat</h1>
    <div id="chat-container">
        <div id="chat-output"></div>
        <input type="text" id="chat-input" placeholder="Type your message here">
        <button id="send-button">Send</button>
    </div>
    <script>
document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatOutput = document.getElementById('chat-output');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', async () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
      chatOutput.innerHTML += `<p>User: ${message}</p>`;
      chatInput.value = '';

      // Placeholder for API call to server
      const response = await fetch('http://localhost:3000/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Gemini-API-Key': 'XKqf2gmHD8', // Include API key in headers
        },
        body: JSON.stringify({ message }),
      });

      console.log('Response status:', response.status); // Log the response status
      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data); // Log the response data
        chatOutput.innerHTML += `<p>AI: ${data.response}</p>`;
      } else {
        console.error('Error response:', response); // Log the error response
        chatOutput.innerHTML += `<p>Error: Could not get AI response.</p>`;
      }
    }
  });
});
    </script>
</body>
</html>
