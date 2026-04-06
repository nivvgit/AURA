# Aura Fine Dining - Full Stack Website

A premium, full-stack restaurant management web application. Built with a Node.js + Express backend and a responsive Vanilla HTML/CSS/JS frontend.

## Features
- **Dynamic Menu:** Categorized food items fetched from Supabase.
- **Table Reservations:** Form submission that saves booking requests to Supabase.
- **Customer Reviews:** Star-rating review system mapped to the frontend.
- **Contact Integration:** Built-in form submitting user messages alongside an embedded Google Map.
- **Admin Dashboard:** Secure authentication panel to manage menu items, read messages, and view reservations.

## Technology Stack
- **Frontend:** Vanilla HTML5, CSS3 (Variables, Grid, Flexbox), JavaScript (Fetch API).
- **Backend:** Node.js, Express.js.
- **Database:** Supabase (PostgreSQL).
- **Authentication:** JSON Web Tokens (JWT).

## Local Setup Instructions

1. **Clone/Download the repository**
2. **Setup the Backend:**
   - Navigate into `/backend`: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file referencing the `SUPABASE_URL` and `SUPABASE_KEY` provided in the environment.
   - Start the server: `node server.js` (Server runs on port 5000 by default).
3. **Setup the Frontend:**
   - The frontend is completely static! You can open `frontend/index.html` directly in your browser or run a simple local web server:
   - `npx serve frontend` (or via VS Code Live Server extension).
   - Ensure the `API_URL` inside `frontend/js/api.js` points to your running backend (`http://localhost:5000/api`).

## Supabase Database Setup

1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** and paste the contents of `database_schema.sql`.
3. Run the script to create the `menus`, `reservations`, `reviews`, and `contacts` tables with sample data.
4. Go to **Project Settings** -> **API** to find your `Project URL` and `anon public` key.

## Deployment Guide (Render)

### 1. Backend Deployment on Render
1. Push your code to a GitHub repository.
2. Go to [Render.com](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the following details:
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Click on **Advanced** -> **Environment Variables** and add:
   - `SUPABASE_URL`: (Your Supabase Project URL)
   - `SUPABASE_KEY`: (Your Supabase Anon Key)
   - `JWT_SECRET`: (A long, secure random string)
   - `ADMIN_USER`: (Your desired admin username e.g., `admin`)
   - `ADMIN_PASS`: (Your desired admin password)
6. Click **Create Web Service**.

### 2. Frontend Deployment on Render (Static Site)
1. On Render, create a new **Static Site**.
2. Connect the same GitHub repository.
3. Set the details:
   - **Root Directory:** `frontend`
   - **Build Command:** (leave empty)
   - **Publish Directory:** `./`
4. **IMPORTANT**: Update `API_URL` inside `frontend/js/api.js` to point to the new deployed backend URL.
5. Click **Create Static Site**.

## Admin Default Credentials
- **Username:** `admin`
- **Password:** `password123`
