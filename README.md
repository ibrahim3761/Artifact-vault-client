# 🏺 Artifact Vault

**🔗 Live Website:** [https://artifact-vault-app.web.app/](https://artifact-vault-app.web.app/)

Artifact Vault is a full-stack, mobile-responsive web application that enables users to upload, manage, and explore meaningful digital artifacts. From historical pieces to personal creations, users can preserve and share their work in a vibrant, interactive community.

---

## 🌟 Features

### 🔐 Secure User Authentication
Seamlessly authenticate with **Firebase Auth** using email/password or Google sign-in.

### 🖼️ Artifact Management (CRUD)
Authenticated users can:
- Create new artifacts with image, title, and description
- Edit or delete their own artifacts
- Browse artifacts uploaded by others

### ❤️ Like System
Like/unlike artifacts from the community, promoting engagement and interaction.

### 📁 Personalized Dashboards
- **My Artifacts** – View and manage your uploads
- **Liked Artifacts** – View artifacts you've liked

### 🌓 Light & Dark Mode
Accessible toggle to switch between light and dark themes using **daisyUI**.

### ✅ Toast Notifications
Stylish, non-intrusive feedback via **React Toastify** for actions like upload success, errors, and deletions.

### 📱 Responsive Design
Built for mobile, tablet, and desktop using **Tailwind CSS**, **daisyUI**, and **Flowbite** components.

### 💫 Animations
Smooth transitions and UI animations powered by **Framer Motion**.

---

## 🛠 Tech Stack

### 🧩 Frontend
- **React 19**
- **React Router v7**
- **Tailwind CSS v4**
- **DaisyUI**, **Flowbite**, **Mamba UI**, **Chakra UI**
- **Framer Motion** – Animations
- **React Toastify** – Notifications
- **SweetAlert2** – Alerts & Confirmations
- **Axios** – API Requests
- **React Icons** – Icon library
- **React Responsive Carousel** – Optional image sliders

### 🌐 Backend
- **Express.js** – Node.js backend framework
- **MongoDB** – Cloud-based NoSQL database (MongoDB Atlas)
- **Firebase Admin SDK** – Secure server-side user management

### 🔒 Authentication & Hosting
- **Firebase Authentication**
- **Firebase Hosting** (frontend)

---

## 📦 NPM Packages Used

```bash
# Frontend
@tailwindcss/vite
axios
firebase
flowbite
framer-motion
react
react-dom
react-icons
react-responsive-carousel
react-router
react-toastify
sweetalert2
tailwindcss
dausyUI

# Backend
express
mongodb
cors
dotenv
firebase-admin
