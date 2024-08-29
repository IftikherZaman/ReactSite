// File: src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="profile">
      <div className="section_pic-container">
        <img src="/assets/IMG_8194.png" alt="Iftikher profile picture" className="profile-pic" />
      </div>
      <div className="section__text">
        <p className="section__text_p1">Welcome to my Portfolio</p>
        <h1 className="title">I'm Iftikher Zaman</h1>
        <p className="section__text_p2">A 3rd-year Electrical & Computer Engineering Student</p>
        <div className="btn-container">
          <Link to="/assets/your-resume.pdf" target="_blank" className="btn btn-color-2">Resume</Link>
          <Link to="/contact" className="btn btn-color-1">Contact Info</Link>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/iftikherzaman/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" />
          </a>
          <a href="https://github.com/IftikherZaman" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="My GitHub profile" className="icon" />
          </a>
          <a href="https://devpost.com/izcinan/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/devpost-svgrepo-com (1).png" alt="My Devpost profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;