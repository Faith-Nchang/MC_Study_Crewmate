import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

const SideBar = () => {
    const img_url = 'https://www.montgomerycollege.edu/_images/global/mc_horiz_rgb.svg';

    return (
        <div className="sidebar">
            <Link to="/"><img src={img_url} alt="Crew Mate Logo" className="logo" /></Link>
            <ul className="menu">
                <li><Link to="/home" className="item">Home</Link></li>
                <li><Link to="/groups" className="item">Created Groups</Link></li>
                <li><Link to="/create-group" className="item">Create new Group</Link></li>
                <li><Link to="/" className="item">About</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;
