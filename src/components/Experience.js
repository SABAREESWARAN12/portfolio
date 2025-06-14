import React from 'react';
import '../assets/Experience.css';
import ExperienceVector from '../assets/experience_vector.svg';

const Experience = () => (
  <section className="experience-section">
    <div className="experience-content">
      <div className="experience-text">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-entry">
          <h3 className="experience-role">
            Associate Software Developer - Bankbazaar.com <span className="experience-dates">(2024 - Present)</span>
          </h3>
          <ul className="experience-list">
            <li>Built and maintained RESTful applications</li>
            <li>Collaborated on cross-functional teams</li>
            <li>Used Java, Spring Boot, MongoDB, SQL</li>
            <li>Debugged and optimized applications</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-role">
            Intern - Bankbazaar.com <span className="experience-dates">(2023 - 2024)</span>
          </h3>
          <ul className="experience-list">
            <li>Assisted in software development and debugging</li>
            <li>Gained hands-on experience in monolithic and microservices architecture</li>
          </ul>
        </div>
      </div>

      <div className="experience-image">
        <img src={ExperienceVector} alt="Experience Illustration" />
      </div>
    </div>
  </section>
);

export default Experience;
