import React from 'react';
import './Card.css';
const Card = ({ content }) => {
    return (
        <div className="card">
            {content}
        </div>
    );
};


export default Card;