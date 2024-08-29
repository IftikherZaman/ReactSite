// File: src/components/About.js
import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/W.png',
    '/assets/Salma.png',
    '/assets/IMG_0108.png',
    '/assets/IMG_7626 (1).png',
    '/assets/IMG_1263.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="/assets/experience.png" alt="Experience icon" className="icon" />
              <h3>Current Position</h3>
              <ul>
                <li>Co-founder, Dispute Lens</li>
                <li>Driverless Perception Team Member, UofT Formula Racing Team</li>
                <li>Entrepreneurial Fellow, UofT Entrepreneurship Hatchery</li>
              </ul>
            </div>
            <div className="details-container">
              <img src="/assets/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>BASc. Computer Engineering, University of Toronto</p>
            </div>
          </div>
          <div className="intro-paragraph">
            <p>
              I am an international student from Bangladesh, starting my undergraduate
              journey at UofT in Fall 2022 as a recipient of UofT Engineering's
              "International Scholar Award". My greatest strength is my ability to
              absorb and replicate admirable qualities from those around me, shaping
              who I am today. My biggest fear is oblivion. One of the reasons behind
              choosing engineering was to make a sustainable impact on the people
              around me and leave an impression beyond my presence. My biggest daily
              challenge is waking up early, as being a night owl, I often find my peak
              productivity at night. In terms of leisure, I am a die-hard Manchester
              United fan. I love being a part of team sports and the competition in
              them. I am also a cinephile and have watched all kinds of classics, from
              Alfred Hitchcock thrillers to Stanley Kubrick films.
            </p>
          </div>
        </div>
        <div className="section__pic-container">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Profile picture ${index + 1}`}
                className={`about-pic ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
            <div className="slideshow-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;