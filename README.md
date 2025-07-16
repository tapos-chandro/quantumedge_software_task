# Frontend Developer Intern Task

🔗 **[Live Project](https://stirring-cranachan-a684e4.netlify.app/)**   

---

## 📁 Project Overview

This project is a 3-page frontend application built for a frontend intern assignment. It replicates a given Figma design and integrates real API endpoints for user authentication and job listings.

---

## 🧩 Features

- 🔐 **Login Page** — Authenticates users via API  
- 📝 **Registration Page** — Registers new users using API  
- 💼 **Job Listings Page** — Displays job data fetched from external API  
- 💬 User feedback using **SweetAlert2**  
- 📱 Fully responsive design using **Tailwind CSS**  
- 🔄 CORS handled via a custom **Express proxy server**

---

## 🧪 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Axios** for API handling
- **React Router DOM**
- **SweetAlert2** for notifications
- **Express.js** for proxy server

---

## 📡 API Endpoints Used

| Purpose        | Endpoint (via Proxy)               |
|----------------|-------------------------------------|
| Login          | `POST /api/auth/login`              |
| Registration   | `POST /api/auth/registration`       |
| Job Listings   | `GET /api/browse/pro-jobs`          |

> These are proxied to the actual API using Express.js to avoid CORS issues.

