import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sideBar.css';

const SideBar = () => {
    const location = useLocation(); // Get the current location
    const img_url = 'https://www.montgomerycollege.edu/_images/global/mc_horiz_rgb.svg';

    return (
        <div className="sidebar">
            <Link to="/"><img src={img_url} alt="Crew Mate Logo" className="logo" /></Link>
            <ul className="menu">
                <li>
                    <Link to="/home" className={`item ${location.pathname === '/home' ? 'active' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/groups" className={`item ${location.pathname === '/groups' ? 'active' : ''}`}>
                        Created Groups
                    </Link>
                </li>
                <li>
                    <Link to="/create-group" className={`item ${location.pathname === '/create-group' ? 'active' : ''}`}>
                        Create new Group
                    </Link>
                </li>
               
            </ul>
        </div>
    );
};

export default SideBar;
