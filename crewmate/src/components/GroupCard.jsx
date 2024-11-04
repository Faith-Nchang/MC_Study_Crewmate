import React from 'react';
import './GroupCard.css';

const GroupCard = ({ groupName, groupType, description, totalMembers, onEditGroup, onDeleteGroup, onViewGroup }) => {
    return (
        <div className="group-card">
            <h2>{groupName}</h2>
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