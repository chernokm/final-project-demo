import React from "react";
import { Link } from "react-router-dom";
import "./header.css";



function Header() {
    return (
        <header className="header">
            <span>SORAS DUNGEON</span>
            {/* navigation bar added to the top of each page to get between the info screen and about page */}
            <nav className="header__nav">
                <Link to="/">Home Page</Link> |
                 <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;