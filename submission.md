# Hackathon Submission Cheat Sheet

## Project Info
**Project Name:** Clair - AI Mortgage Assistant
**Tagline:** The First Q-Protocol Native Mortgage Agent
**Devpost URL:** (Leave blank if creating new)

## URLs
**GitHub Repo:** https://github.com/Phil-Hills/a2ac-ai
**Demo/Live Link:** https://movement-voice-agent-235894147478.us-central1.run.app
**Video Demo:** (Paste your YouTube/Loom link here)

## Story / Description

### Inspiration
The mortgage industry is plagued by slow response times and impersonal interactions. We wanted to build an agent that isn't just a chatbot, but a "Digital Employee" that can see, hear, and reason. Inspired by the **Q-Protocol's** mission to create verifiable, autonomous agents, we realized that a high-stakes domain like financial services was the perfect proving ground for a strict, "Receipts-based" AI.

### What it does
Clair is a fully interactive 3D AI Mortgage Assistant. She doesn't just type; she speaks with a human-like voice (ElevenLabs) and reacts visually (Three.js).
*   **Qualifies Borrowers:** Conducts natural language interviews to determine loan eligibility.
*   **Analyzes Documents:** Users can upload paystubs or bank statements, and Clair analyzes them instantly using Gemini 1.5 Pro.
*   **Educates:** Explains complex mortgage terms in simple language.
*   **Remembers:** Maintains context across the conversation using a specialized memory object.

### How we built it
Clair is built on a modern, serverless stack designed for scale and autonomy:
*   **Frontend:** React + Vite + Tailwind CSS for a responsive UI.
*   **Visuals:** Three.js rendering a reactive 3D orb that maps to the agent's state.
*   **Voice:** ElevenLabs API for low-latency, emotive Text-to-Speech.
*   **Brain:** Google Gemini 1.5 Pro (via Vertex AI) serves as the cognitive engine, turning user intent into structured actions.
*   **Orchestration:** The **Q-Protocol** governs the agent's behavior, ensuring that every claim is backed by a "Receipt" (verifiable proof).
*   **Infrastructure:** Deployed on Google Cloud Run for auto-scaling and zero-maintenance operations.

### Challenges we ran into
*   **Latency:** Connecting a real-time 3D animation with cloud-based LLM and TTS services introduced conversational lag. We optimized this by streaming responses and using optimistic UI updates.
*   **Strictness vs. Helpfulness:** Implementing the Q-Protocol meant the agent had to be strict about facts ("Receipts") while still being a helpful customer service representative. Tuning the system prompt to balance these modes was a key challenge.
*   **Browser-Based Voice:** Handling audio contexts and microphone permissions across different browsers required robust fallback logic (which we successfully implemented!).

### Accomplishments that we're proud of
*   **The "Vibe":** We achieved a level of polish where the agent feels "alive" due to the synchronization of voice and visuals.
*   **Architecture:** The codebase is clean, modular, and ready for expansion, adhering to rigorous software engineering standards.
*   **Self-Correction:** The agent can detect when it's hallucinating or unsure and fallback to asking clarifying questions rather than guessing.

### What we learned
*   **Multimodal is Hard but Worth It:** Combining text, audio, and visuals creates a strictly superior user experience compared to text-only bots.
*   **Protocol Matters:** Having a defined protocol (Q-Protocol) for how the agent "thinks" made debugging complex interactions much easier.
*   **Gemini's Context Window:** The massive context window of Gemini 1.5 Pro allowed us to feed entire loan guidelines into the prompt without fine-tuning.

### What's next for Clair
*   **Real LOS Integration:** Connecting Clair directly to Encompass or LendingPad to push loan files.
*   **Vision Capabilities:** Allowing Clair to "see" documents users hold up to the camera.
*   **Multi-Agent Swarm:** Spawning sub-agents for specific tasks like "Rate Locking" or "Underwriting".

## Built With
*   google-cloud
*   gemini-1.5-pro
*   elevenlabs
*   react
*   three.js
*   python
*   fastapi
*   docker
