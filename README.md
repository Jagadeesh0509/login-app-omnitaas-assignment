# Login Application

This repository contains a simple login application built with React (frontend) and Node.js with Express (backend).

## Project Structure
```
login-app/
├── backend/
│   ├── package.json
│   ├── server.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── Login.js
│       └── Welcome.js
```

## Setup Instructions

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the backend server:**
   ```bash
   npm start
   ```
   The server listens on `http://localhost:5000`.

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the React app:**
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

## Usage

- Open `http://localhost:3000` in your browser.
- Enter credentials `admin` / `admin` to succeed.
- Incorrect credentials show an error message.
- Username is remembered in `localStorage` for subsequent visits.

## Notes
- Uses functional components and React hooks.
- Backend API responds with appropriate HTTP status codes (200/401).

Feel free to enhance with HTTPS or other security features.