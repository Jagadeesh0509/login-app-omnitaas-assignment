# Login Application

# LIVE https://login-app-omnitaas-assignment.vercel.app/login

This repository contains a simple login application built with **React (frontend)** and **Node.js with Express (backend)**.

---

# 📁 Project Structure

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

---

# ⚙️ Setup Instructions (Local Development)

### 1. Install backend dependencies

```
cd backend
npm install
```

### 2. Start backend server

```
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

### 3. Install frontend dependencies

```
cd ../frontend
npm install
```

### 4. Start React application

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🧑‍💻 Usage

1. Open your browser and go to:

```
http://localhost:3000
```

2. Use the following credentials:

```
Username: admin
Password: admin
```

3. If login is successful:

* Username is saved in **localStorage**
* User is redirected to the **Welcome page**

4. If credentials are incorrect, an **error message** is shown.

---

# Deployment

This project uses:

* Frontend → Vercel
* Backend → Render

---

# Deploy Backend (Render)

1. Push the project to GitHub.

2. Go to **render.com** and sign in with GitHub.

3. Click:

```
New + → Web Service
```

4. Select the repository:

```
login-app-omnitaas-assignment
```

5. Configure settings:

```
Language: Node
Branch: main
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

6. Click **Create Web Service**

After deployment you will get a backend URL like:

```
https://login-app-omnitaas-assignment.onrender.com
```

---

# 🌍 Deploy Frontend (Vercel)

1. Go to **vercel.com**

2. Login with GitHub.

3. Click:

```
Add New → Project
```

4. Select repository:

```
login-app-omnitaas-assignment
```

5. Configure settings:

```
Framework: Create React App
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

6. Click **Deploy**

After deployment you will get a URL like:

```
https://login-app-omnitaas-assignment.vercel.app
```

---

# 🔗 Connecting Frontend to Backend

Update the API URL in `Login.js`.

Replace:

```javascript
axios.post("http://localhost:5000/login", { username, password })
```

With:

```javascript
axios.post(
  "https://login-app-omnitaas-assignment.onrender.com/login",
  { username, password }
);
```

---

# Backend Port Configuration

Ensure your backend server uses environment port.

Example (`server.js`):

```javascript
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This allows the server to run both locally and on Render.

---

# 🏗️ Architecture

```
React Frontend (Vercel)
        ↓
Axios API Request
        ↓
Node.js + Express Backend (Render)
```

---

