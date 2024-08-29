// File: src/components/Projects.js
import React from 'react';

const ProjectItem = ({ img, title, description, githubLink, demoLink }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={img} alt={title} className="project-img" />
    </div>
    <h2 className="project-title">{title}</h2>
    <p>{description}</p>
    <div className="btn-container">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
          Github
        </a>
      )}
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
          Video Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      img: '/assets/Untitled design (5).png',
      title: 'Haptic Speak',
      description: 'A project focused on haptic feedback communication.',
      githubLink: 'https://github.com/yourusername/haptic-speak',
      demoLink: 'https://youtube.com/your-haptic-speak-demo'
    },
    {
      img: '/assets/HEAD SOCCER.png',
      title: 'Head Soccer on NIOS-II',
      description: 'A game implementation on the NIOS-II architecture.',
      githubLink: 'https://github.com/yourusername/head-soccer-nios-ii',
      demoLink: 'https://youtube.com/your-head-soccer-demo'
    },
    {
      img: '/assets/HEAD SOCCER (4).png',
      title: 'Puzzle Master',
      description: 'An engaging puzzle game showcasing problem-solving skills.',
      githubLink: 'https://github.com/yourusername/puzzle-master',
      demoLink: 'https://youtube.com/your-puzzle-master-demo'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;