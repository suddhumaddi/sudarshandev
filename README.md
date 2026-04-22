# 🧠 LexiSight — Real-Time Indian Sign Language Translator

LexiSight is a **real-time, browser-based Indian Sign Language (ISL) translator** that enables seamless two-way communication between the deaf/hard-of-hearing community and the hearing world.

⚡ No installation  
🌐 No server  
🔒 Fully private  
📶 Works offline after first load  

---

## 🚀 Live Concept

Open the web app → show hand gestures → AI speaks  
Or speak → AI signs back using a 3D avatar  

---

## 🎯 Problem Statement

- Over **63 million people in India** are deaf or hard-of-hearing
- Sign language interpreters are:
  - ❌ Expensive  
  - ❌ Rare  
  - ❌ Not accessible daily  
- Existing tools:
  - Require internet
  - Require apps/subscriptions

👉 Result: **Massive communication gap in hospitals, schools, workplaces**

---

## 💡 Solution

LexiSight provides:

- 🧠 AI-powered gesture recognition  
- 🔊 Real-time speech output  
- ✋ Animated sign playback  
- 📱 Works on any device with a browser  

All running **entirely on-device (client-side)**.

---

## ✨ Core Features

### 🖐️ Sign → Speech
- Detects ISL gestures (A–Z, 0–9)
- Uses 21 hand landmarks in real-time
- Converts gestures into spoken Indian English
- Builds full sentences automatically
- Confidence-based prediction (90–97%)

---

### 🎙️ Speech → Sign
- Real-time voice transcription
- Converts speech into ISL gestures
- Animated 3D hand avatar
- Adjustable playback speed

---

### 🧪 Custom Gesture Training
- Add new gestures easily
- Capture 50 samples via webcam
- Export dataset as JSON
- Retrain model using Python
- Plug new model into app (no UI changes)

---

## ⚙️ How It Works

### 🧠 AI Pipeline

1. Webcam Capture (30 FPS)
2. Hand Tracking via :contentReference[oaicite:1]{index=1}  
3. Landmark Normalization  
4. Feature Scaling  
5. Inference via :contentReference[oaicite:2]{index=2}  
6. Output (text + speech)

## 🔄 System Flow

```mermaid
flowchart TD

A[User Opens Web App] --> B{Select Mode}

B -->|Sign → Speech| C[Enable Webcam]
C --> D[Capture Hand Frames]
D --> E[MediaPipe Detects 21 Landmarks]
E --> F[Normalize Coordinates]
F --> G[TensorFlow.js Model Prediction]
G --> H[Display Text Output]
H --> I[Convert to Speech]

B -->|Speech → Sign| J[Enable Microphone]
J --> K[Speech-to-Text Processing]
K --> L[Text Segmentation]
L --> M[3D Hand Avatar Animation]
M --> N[Display ISL Gestures]

style A fill:#0f172a,color:#fff
style B fill:#1e293b,color:#fff

---


---

## ✅ 2. SYSTEM ARCHITECTURE DIAGRAM

```markdown
## 🏗️ System Architecture

```mermaid
flowchart LR

subgraph Frontend
A[React UI]
B[Webcam Input]
C[Microphone Input]
D[3D Avatar Renderer]
end

subgraph AI Engine (Client-Side)
E[MediaPipe Hands]
F[Preprocessing + Normalization]
G[TensorFlow.js Model]
H[Prediction Smoothing]
end

subgraph Browser APIs
I[Web Speech API]
J[Audio Output]
end

B --> E
E --> F
F --> G
G --> H
H --> A

C --> I
I --> A

A --> D

A --> J

style Frontend fill:#111827,color:#fff
style AI Engine fill:#064e3b,color:#fff
style Browser APIs fill:#1e3a8a,color:#fff

## 🧬 Model Architecture
Input: 63 features (21 landmarks × 3)

Dense(256) → BatchNorm → Dropout(0.4)
Dense(128) → BatchNorm → Dropout(0.35)
Dense(64) → BatchNorm → Dropout(0.25)
Dense(N) → Softmax


- Accuracy: **~92–97%**
- Smoothing: 10-frame rolling window
- Confidence threshold: 75%

---

## 📊 Datasets Used

| Dataset | Classes | Samples | Purpose |
|--------|--------|--------|--------|
| ISL Gesture Images | 37 | ~55,500 | Primary |
| ISL CSLRT | 24 | ~27,024 | Diversity |

---

## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| :contentReference[oaicite:3]{index=3} + Vite | Frontend |
| :contentReference[oaicite:4]{index=4} | In-browser AI |
| :contentReference[oaicite:5]{index=5} | Hand tracking |
| Web Speech API | Speech-to-text & TTS |
| Tailwind CSS | Styling |
| Vite PWA Plugin | Offline support |
| Python + TensorFlow | Model training |

---

## 🖥️ User Interface

- Dark "Obsidian Lab" theme  
- Real-time FPS + model status  
- Animated UI & micro-interactions  
- Dual-panel translator system  

### Pages:
- 🏠 Landing
- 🔄 Translator
- 📘 About
- 🧪 Train

---

## 📱 Accessibility

- Fully responsive (mobile + desktop)
- Multi-camera support
- Voice selection options
- Offline-first PWA
- Auto-speak mode

---

## 🔑 Key Highlights

| Feature | Impact |
|--------|--------|
| 💻 100% Client-side | Zero cost, zero privacy risk |
| 🔄 Bidirectional Translation | True communication bridge |
| 🧪 Extensible AI | Train custom gestures |
| 📶 Offline Support | Works in rural areas |
| ⚡ Real-time | <50ms latency |
| 🔓 No login | Instant access |

---

## 🌍 Social Impact

Built for **AIESEC Youth Speak Ideathon 2026 (IIIT Hyderabad)**  
Aligned with:

🎯 **UN SDG 10 — Reduced Inequalities**

> "Communication is a human right — technology should make it universal."

---

## 📦 Installation

```bash

git clone https://github.com/jashvanthh/Lexisight.git
cd Lexisight
npm install
npm run dev

```

## 🔒 Privacy
 
🚫 No data leaves your device
🚫 No servers involved
🚫 No tracking

-Perfect for:

Hospitals
Classrooms
Sensitive environments

## 🤝 Contributing

Contributions are welcome!

Fork the repo
Create a branch
Commit changes
Submit PR
📄 License

## MIT License

👨‍💻 Author

Developed by Jashvanth and Team

## ⭐ Support

If you like this project:

⭐ Star the repo
🔁 Share it
💡 Contribute

## 🔮 Future Scope

Sentence-level translation
Regional sign dialect support
Mobile app version
AI avatar improvements
Real-time conversation mode
