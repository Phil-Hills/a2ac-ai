# a2ac-ai: Clair - AI Mortgage Assistant

> **Gemini 3 Hackathon Submission**
> _Category: AI Agents / Productivity_

## Overview
Clair is an advanced AI Mortgage Assistant designed to revolutionize the loan origination process. Built on the **Q-Protocol**, Clair leverages Google's **Gemini 1.5 Pro** and **ElevenLabs** premium voice technology to provide a seamless, human-like interaction for borrowers and loan officers.

## Key Features
- **3D Interactive Avatar**: A visual AI interface powered by Three.js.
- **Premium Voice Interaction**: Real-time, natural speech synthesis using ElevenLabs.
- **Context-Aware Memory**: Remembers user details and conversation history for personalized assistance.
- **Document Analysis**: Upload and analyze mortgage documents instantly.
- **Smart Prequalification**: Guides users through the loan qualification process with intelligent questioning.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Three.js
- **Backend**: Python, FastAPI, Uvicorn
- **AI Models**: Google Gemini 1.5 Pro (via Vertex AI), ElevenLabs TTS
- **Infrastructure**: Google Cloud Run, Firebase/Firestore

## Setup & Installation

### Prerequisites
- Node.js v18+
- Python 3.9+
- Google Cloud Project with Vertex AI enabled
- ElevenLabs API Key

### Quick Start
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/philhills/a2ac-ai.git
    cd a2ac-ai
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment**:
    Create a `.env` file with your keys:
    ```env
    GOOGLE_CLOUD_PROJECT=your-project-id
    ELEVENLABS_API_KEY=your-api-key
    ```

5.  **Run Locally**:
    ```bash
    # Start Backend
    uvicorn app:app --reload

    # Start Frontend (in a new terminal)
    npm run dev
    ```

## Live Demo
Check out the live deployment here: [Clair AI Demo](https://movement-voice-agent-235894147478.us-central1.run.app)

## License
MIT License
