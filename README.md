# <img src="https://raw.githubusercontent.com/Raxku2/Animated-Fluent-Emojis/refs/heads/master/Emojis/Animals/Goat.png" height="40" /> GOAT Markdown Editor

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-Preact-673ab8?style=flat-square" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?style=flat-square" />
  <img src="https://img.shields.io/badge/State-Zustand-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Apache%202.0-D22128?style=flat-square" />
</p>

> **A modern, blazing-fast, and beautifully crafted Markdown editor for developers who care about experience.**

![GOAT Markdown Editor Banner](https://dummyimage.com/1200x400/0f172a/ffffff\&text=GOAT+Markdown+Editor)

---

## ✨ Overview

**GOAT Markdown Editor** is a practice project built with a strong focus on **UX, performance, and clean architecture**. It delivers a smooth Markdown writing experience, seamless authentication, and cloud-backed document storage — all wrapped in a bold, developer-first design.

This project represents an end‑to‑end modern web workflow, from frontend state management and animations to API-driven persistence and authentication.

---

## 🚀 Live Demo

🌐 **Deployed on Vercel**
👉 [*Live URL here*](https://goat-doc-editor.vercel.app)

---

## 🧠 Core Features

### ✍️ Markdown Editing

* Real-time Markdown editor
* **Split-view Markdown preview** (Editor + Preview)
* Clean, distraction-free writing interface
* Optimized for speed and responsiveness

### 🎨 Theme Customization

* Light / Dark theme support
* Theme state persisted across sessions
* Tailwind-powered consistent theming

### 💾 File Management

* Save Markdown files locally on your device
* Import existing `.md` files
* Export-ready document structure

### ☁️ Cloud Document Storage

* Save documents directly to your account
* Persistent storage across devices
* Secure API-driven sync

### 🔐 Authentication

* Sign Up & Sign In support
* Integrated with **GOAT Auth Service**
* Token-based secure session handling

### 🎨 Polished UI & Interactions

* Smooth micro-interactions and animations
* Consistent branding and iconography
* Responsive layout for all screen sizes

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| **Preact**       | Lightweight, fast UI rendering       |
| **Zustand**      | Simple and scalable state management |
| **Tailwind CSS** | Utility-first styling system         |
| **GSAP**         | High-performance animations          |
| **Remix Icon**   | Consistent icon set                  |
| **clsx**         | Conditional class handling           |
| **Tippy.js**     | Tooltips & UI hints                  |

### Backend (High-Level)

> Backend is maintained in a **separate repository** and documented in detail there.

* Built with **FastAPI**
* Data validation using **Pydantic**
* Database powered by **MongoDB**

*(Backend implementation details are intentionally abstracted in this repository.)*

---

## 🧩 Architecture Philosophy

* **Frontend-first design** with API abstraction
* Decoupled authentication via GOAT Auth Service
* Clean separation of concerns
* Scalable state management
* Animation as enhancement, not distraction

---

## 📂 Project Structure (Frontend)

The project follows a **clean, feature-oriented structure**, keeping components, hooks, and state well-isolated and scalable.

```
.
├── example.env              # Environment variable template
├── index.html               # App entry HTML
├── package.json
├── public/
│   ├── favicon.svg
│   ├── SAMPLE.md            # Sample markdown file
│   └── vite.svg
├── README.md
├── src/
│   ├── app.jsx              # App-level routing & layout
│   ├── assets/
│   │   └── preact.svg
│   ├── components/
│   │   ├── about/           # About page
│   │   ├── auth/            # Auth UI (GOAT Auth integration)
│   │   ├── cards/           # Document cards
│   │   ├── editor/          # Markdown editor core
│   │   ├── home/            # Home page
│   │   ├── lodingBar/       # Loading indicator
│   │   ├── navbar/          # Navigation bar
│   │   ├── open/            # Local file open logic
│   │   ├── settings/        # User & editor settings
│   │   └── test/            # Experimental components
│   ├── hooks/
│   │   ├── auth/            # Auth-related hooks
│   │   ├── backend/         # Backend API hooks
│   │   ├── savedoc/         # Save document logic
│   │   └── theme/           # Theme management
│   ├── store/
│   │   ├── doc/             # Editor document store
│   │   ├── sampleDoc/       # Sample markdown store
│   │   └── user/            # User session store
│   ├── index.css            # Global styles
│   └── main.jsx             # App bootstrap
├── vercel.json              # Vercel deployment config
├── vite.config.js
└── yarn.lock
```

---

## 🔗 Related Projects

* **GOAT Auth Service** – Centralized authentication system
* **GOAT Markdown Backend API** – Document storage & user data
  👉 Backend Repository: **[github.com/Raxku2/goat_doc_editor_backend](https://github.com/Raxku2/goat_doc_editor_backend)**

> Backend is maintained separately to keep frontend and backend concerns cleanly decoupled.

---

## 🧪 Project Status

🟢 **Actively Developed**
This project is built as a learning-focused, production-quality practice application.

This project already implements several advanced features typically found in production-grade editors.

Future ideas may include:

* Folder-based document organization
* Offline-first sync
* Collaborative editing

---

## 🤝 Contribution

This is primarily a personal practice project, but:

* Suggestions are welcome
* Issues can be raised for bugs or improvements
* Forking for learning purposes is encouraged

---

## 📜 License

Licensed under the Apache License 2.0 © Pinaka


---

## 👤 Author

**Pinaka**
Builder • Engineer • Open-source enthusiast

> *“Tools should feel powerful, not heavy.”*

---

<p align="center">
  <strong>🐐 GOAT Markdown Editor — Write Markdown like a pro.</strong>
</p>
