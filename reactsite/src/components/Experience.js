// File: src/components/Experience.js
import React from 'react';

const ExperienceItem = ({ title, items }) => (
  <div className="details-container">
    <h3 className="experience-sub-title">{title}</h3>
    <div className="article-container">
      {items.map((item, index) => (
        <article key={index}>
          <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
          <div>
            <h3>{item.name}</h3>
            <p>{item.level}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'GTK', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Kotlin', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'C/C++', level: 'Experienced' },
    { name: 'Python/Pytorch', level: 'Intermediate' },
    { name: 'GoLang', level: 'Basic' },
    { name: 'Assembly Language (NIOS-II/ ARM)', level: 'Intermediate' },
    { name: 'Verilog', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section id="experience">
      <h2 className="title">Experience</h2>
      <div className="experience-details-container">
        <ExperienceItem title="Frontend Development" items={frontendSkills} />
        <ExperienceItem title="Backend Development" items={backendSkills} />
      </div>
    </section>
  );
};

export default Experience;