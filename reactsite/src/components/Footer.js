// File: src/App.js
// File: src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="nav-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>Copyright © {new Date().getFullYear()} Iftikher Zaman. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;