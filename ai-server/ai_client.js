document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatOutput = document.getElementById('chat-output');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', async () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
      chatOutput.innerHTML += `<p>User: ${message}</p>`;
      chatInput.value = '';

      // Call to server API
      try {
        const response = await fetch('http://localhost:3000/api/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        if (!response.ok) {
          console.error('HTTP error!', response.status);
          chatOutput.innerHTML += `<p>Error: HTTP ${response.status}</p>`;
          return;
        }

        const data = await response.json();
        chatOutput.innerHTML += `<p>AI: ${data.response}</p>`;
      } catch (error) {
        console.error('Fetch error:', error);
        chatOutput.innerHTML += `<p>Error: Network error</p>`;
      }
    }
  });
});
</script>
