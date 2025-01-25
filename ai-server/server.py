from flask import Flask, request, jsonify
import google.generativeai as genai
import os

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("GEMINI_API_KEY environment variable is not set!")
    exit(1)

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

@app.route('/api/gemini', methods=['POST'])
def gemini_api():
    data = request.get_json()
    user_message = data.get('message')

    if not user_message:
        return jsonify({'error': 'Message is required'}), 400

    try:
        response = model.generate_content(user_message)
        response_text = response.text
        return jsonify({'response': response_text})
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        return jsonify({'error': 'Failed to get response from AI'}), 500

if __name__ == '__main__':
    app.run(port=3000, debug=False)
