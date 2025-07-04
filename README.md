# 📊 Mini Local Business Dashboard (Full Stack)

This project is a fully responsive, SEO-simulation dashboard designed to demonstrate how small businesses might view and manage their online presence. The application allows users to input a business name and location, and instantly fetch simulated Google ratings, review counts, and dynamic SEO headlines. It also features the ability to regenerate fresh headlines using a randomized backend API.

- 🧠 **Frontend**: React + TypeScript + Tailwind CSS
- ⚙️ **Backend**: Node.js + Express (TypeScript)

---

## 🌐 Live Demo

- 🚀 Frontend: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)

---

## 📁 Project Structure

```
project-root/
├── frontend/ # React + TypeScript + Tailwind CSS
└── backend/ # Express + TypeScript API
```

---

## 🚀 How to Run

### 🧩 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env   # Or manually create .env
npm run dev
```

.env should include:

```bash
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
```

---

#### Endpoints

- POST /api/business-data

- GET /api/regenerate-headline?name=...&location=...

---

### 🎨 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

.env should include:

```bash
VITE_BACKEND_URL=http://localhost:5000/
```

---

## 💡 Features

- 🔁 Regenerate SEO headlines with a button

- ✅ Form validation with error handling

- ⏳ Loading spinner after submission

- 📱 Fully responsive UI with Tailwind

---

## 👨‍💻 Author

- Built by Nithish M  
- GitHub: [@Nithish-14](https://github.com/Nithish-14)