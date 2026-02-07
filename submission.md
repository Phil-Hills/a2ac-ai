# Hackathon Submission: Gemini 3

## Project Name
**Clair - AI Mortgage Assistant**

## Description
Clair is an advanced AI agent designed to streamline the mortgage loan origination process. By leveraging the power of **Google Gemini 1.5 Pro** and **ElevenLabs**, Clair provides a natural, conversational interface for borrowers to get pre-qualified, upload documents, and ask complex questions about their loan status.

## Challenge Category
*Select the appropriate category:*
- [ ] AI Agent / Productivity
- [ ] Fintech / Financial Services
- [ ] Google Cloud Integration

## Demo Video
[Link to YouTube/Loom Video]

## Team Members
- **Phil Hills** - Lead Developer

## How we built it
We used the **Q-Protocol** to orchestrate a swarm of agents. The frontend is built with **React** and **Three.js** for an immersive 3D experience. The backend is a **FastAPI** service hosted on **Google Cloud Run**, integrating **Vertex AI** for reasoning and **ElevenLabs** for life-like speech synthesis.

## Challenges we ran into
- ensuring low-latency voice responses
- handling state management across long conversations
- implementing secure document handling

## Accomplishments that we're proud of
- Seamless integration of 3D avatar lip-sync with TTS.
- Robust "Receipts-based" agent collaboration.
- Fully serverless architecture on GCP.

## What we learned
- The importance of a strict agent protocol (Q-Protocol).
- Advanced techniques in RAG (Retrieval-Augmented Generation) for financial documents.

## What's next for Clair
- Integration with major Loan Origination Systems (LOS) like Encompass.
- Mobile app deployment.
- Multi-language support.
