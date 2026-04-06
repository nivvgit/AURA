# Aura Fine Dining - Full Stack Website

A premium, full-stack restaurant management web application. Built with a Node.js + Express backend and a responsive Vanilla HTML/CSS/JS frontend.

## Features
- **Dynamic Menu:** Categorized food items fetched from MongoDB.
- **Table Reservations:** Form submission that saves booking requests to the database.
- **Customer Reviews:** Star-rating review system mapped to the frontend.
- **Contact Integration:** Built-in form submitting user messages alongside an embedded Google Map.
- **Admin Dashboard:** Secure authentication panel to manage menu items, read messages, and view reservations.

## Technology Stack
- **Frontend:** Vanilla HTML5, CSS3 (Variables, Grid, Flexbox), JavaScript (Fetch API).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB, Mongoose ODM.
- **Authentication:** JSON Web Tokens (JWT).

## Local Setup Instructions

1. **Clone/Download the repository**
2. **Setup the Backend:**
   - Navigate into `/backend`: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file referencing the sample `backend/.env` (modify as needed). Ensure `MONGO_URI` points to your local or Atlas cluster.
   - Start the server: `node server.js` (Server runs on port 5000 by default).
3. **Setup the Frontend:**
   - The frontend is completely static! You can open `frontend/index.html` directly in your browser or run a simple local web server:
   - `npx serve frontend` (or via VS Code Live Server extension).
   - Ensure the `API_URL` inside `frontend/js/api.js` points to your running backend (`http://localhost:5000/api`).

## Deployment Guide (Render & MongoDB Atlas)

### 1. MongoDB Atlas setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free tier cluster.
2. In the Database Access tab, create a new Database User and password.
3. In Network Access, whitelist IP `0.0.0.0/0` (allow from anywhere).
4. Click Connect -> "Connect your application" and copy the connection string. Replace `<password>` with your database user password.

### 2. Backend Deployment on Render
1. Push your code to a GitHub repository (including both `frontend` and `backend` folders, or just `backend` if deploying separately).
2. Go to [Render.com](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the following details:
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Click on **Advanced** -> **Environment Variables** and add:
   - `MONGO_URI`: (Your Atlas connection string)
   - `JWT_SECRET`: (A long, secure random string)
   - `ADMIN_USER`: (Your desired admin username e.g., `admin`)
   - `ADMIN_PASS`: (Your desired admin password)
6. Click **Create Web Service**.

### 3. Frontend Deployment on Render (Static Site)
1. On Render, create a new **Static Site**.
2. Connect the same GitHub repository.
3. Set the details:
   - **Root Directory:** `frontend`
   - **Build Command:** (leave empty)
   - **Publish Directory:** `./`
4. **IMPORTANT**: Before pushing to GitHub, ensure that you update `API_URL` inside `frontend/js/api.js` to point to the new deployed backend URL (e.g., `https://your-backend.onrender.com/api`).
5. Click **Create Static Site**.

## Admin Default Credentials
If relying on the `.env` configuration (for local testing):
- **Username:** `admin`
- **Password:** `password123`
