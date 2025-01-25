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
      const response = await fetch('/api/gemini', { // Assuming server endpoint is /api/gemini
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        chatOutput.innerHTML += `<p>AI: ${data.response}</p>`;
      } else {
        chatOutput.innerHTML += `<p>Error: Could not get AI response.</p>`;
      }
    }
  });
});
