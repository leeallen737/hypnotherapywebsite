import React from 'react';
import './NavBar.css';

const NavBar = props => (
    <header className = "header">
    <div className="logo"><a href="/">The Logo</a></div>
        <nav className="navbar">
            <div></div>
             
             <div>
                 <ul className="toolbar_navigation_items">
                     <li><a href="/">HOME</a></li>
                     <li><a href="/">ABOUT</a></li>
                     <li><a href="/">HYPNOTHERAPY</a></li>
                     <li><a href="/">SERVICES</a></li>
                     <li><a href="/">CONTACT</a></li>
                 </ul>
             </div>
        </nav>
    </header>
)

export default NavBar