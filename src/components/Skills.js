import React from 'react';
import '../assets/Skills.css';
import SkillsVector from '../assets/skills_vector.svg';

const Skills = () => (
  <section className="skills-section">
    <div className="skills-content">
      <div className="skills-image">
        <img src={SkillsVector} alt="Skills Illustration" />
      </div>
      <div className="skills-text">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          <li>Spring Boot</li>
          <li>Hibernate ORM</li>
          <li>JUnit Testing</li>
          <li>Maven</li>
          <li>Kafka</li>
          <li>AWS</li>
          <li>MongoDB</li>
          <li>Docker</li>
          <li>ELK Stack</li>
          <li>Grafana</li>
          <li>React.js</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
