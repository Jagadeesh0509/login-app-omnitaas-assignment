require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rate limiting middleware for login endpoint
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts, please try again later'
});


let users = [];


async function initializeUsers() {
    const hashedPassword = await bcrypt.hash('admin', 10);
    users = [
        { id: 1, username: 'admin', passwordHash: hashedPassword }
    ];
}


function getUserFromDatabase(username) {
    return users.find(user => user.username === username);
}

// Initialize users when server starts
initializeUsers();

app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = getUserFromDatabase(username);
        if (user && await bcrypt.compare(password, user.passwordHash)) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});