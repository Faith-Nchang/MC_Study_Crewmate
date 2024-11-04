import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

const NotFound = () => {
    return (
        <div className="outer">
        <div className="container_c">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/home">Go to Home</Link>
        </div>
        </div>
    );
};

export default NotFound;