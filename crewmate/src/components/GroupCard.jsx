import React from 'react';
import './GroupCard.css';

const GroupCard = ({ groupName, groupType, description, totalMembers, onEditGroup, onDeleteGroup, onViewGroup, highlight }) => {
    return (
        <div className={`group-card ${highlight ? 'highlight' : ''}`}>
            <h2>{groupName}</h2>
            {highlight && <p className="highlight-message">This group has a lot of members!</p>}
            <p className="group-type">{groupType}</p>
            <p className="description">{description}</p>
            <p className="total-members">Total Members: {totalMembers}</p>
            <button onClick={onEditGroup}>Edit Group</button>
            <button onClick={onDeleteGroup}>Delete Group</button>
            <button onClick={onViewGroup}>View Group</button>
        </div>
    );
};

export default GroupCard;
