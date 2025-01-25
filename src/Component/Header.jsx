//import React from 'react';
 import '../Design/Header.css';
 import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li id="about" className='buttons'>About</li>
          <Link id="contact" className='buttons' to="features" >Features</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
