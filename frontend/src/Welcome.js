import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    useEffect(() => {
        if (!username) {
            navigate('/', { replace: true });
        }
    }, [username, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/', { replace: true });
    };

    return (
        <div>
            <h1>Welcome, {username || 'Guest'}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;