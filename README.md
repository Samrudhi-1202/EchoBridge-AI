# EchoBridge AI 🤝

### Breaking Communication Barriers Through AI-Powered Accessibility

EchoBridge AI is an accessible communication platform designed to bridge the communication gap between people who use sign language and people who communicate through speech or text.

The platform combines speech recognition, text-to-speech, and gesture recognition to make everyday communication easier and more inclusive.

## 🌟 Key Features

### 1. Speech-to-Text
- Converts spoken language into readable text.
- Helps users communicate through speech transcription.

### 2. Text-to-Speech
- Converts typed text into spoken audio.
- Supports English, Kannada, and Hindi speech output.

### 3. Sign-to-Text
- Uses camera-based hand gesture recognition.
- Recognizes supported Indian Sign Language gestures.
- Displays recognized signs as text.

### 4. Live Communication
- Integrates speech and gesture communication in one interface.
- Uses a shared camera stream for live gesture recognition.
- Displays speech and confirmed gesture messages together in a conversation transcript.
- Provides spoken output for confirmed gesture messages.

## 🛠️ Technologies Used

- **Frontend:** React.js, Vite, JavaScript, CSS
- **Gesture Recognition:** MediaPipe and JavaScript
- **Backend:** Python, FastAPI
- **Communication:** Browser Speech APIs and text-to-speech integration

## 📂 Project Structure

```text
EchoBridge-AI/
│
├── public/
├── src/
│   ├── components/
│   │   ├── GestureRecognition.jsx
│   │   ├── SpeechToText.jsx
│   │   └── TextToSpeech.jsx
│   │
│   ├── isl/
│   │   ├── data/
│   │   ├── models/
│   │   ├── gestureClassifier.js
│   │   ├── ISLRecorder.jsx
│   │   └── LiveISLRecognition.jsx
│   │
│   ├── App.jsx
│   └── App.css
│
├── tts_server.py
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Python 3
- A modern web browser
- Webcam and microphone

### 1. Clone the repository

```bash
git clone https://github.com/Samrudhi-1202/EchoBridge-AI.git
```

### 2. Navigate to the project folder

```bash
cd EchoBridge-AI
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Start the frontend

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 5. Start the Python TTS backend

Run the Python TTS server separately:

```bash
python tts_server.py
```

Ensure the required Python dependencies are installed before starting the backend.

## 💡 Project Objective

The main objective of EchoBridge AI is to make communication more accessible by providing multiple ways to interact through speech, text, and sign language gestures.

## 🔮 Future Enhancements

- Expand the Indian Sign Language gesture vocabulary.
- Improve gesture recognition accuracy in different lighting conditions.
- Support more regional languages.
- Enhance real-time two-way communication.
- Improve accessibility and user experience.

## 👥 Team

**Project:** EchoBridge AI

**GitHub Repository:** [Samrudhi-1202/EchoBridge-AI](https://github.com/Samrudhi-1202/EchoBridge-AI)

---

### Making communication accessible, one connection at a time. ❤️
