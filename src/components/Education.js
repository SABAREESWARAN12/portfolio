import React from 'react';
import '../assets/Education.css';
import EduVector from '../assets/education_vector.svg'; // Add an education SVG here

const Education = () => (
  <section className="education-section">
    <div className="education-content">
      <div className="education-text">
        <h2 className="education-title">Education</h2>
        <ul className="education-list">
          <li>
            <strong>Qspider Institutions</strong> — Java Full Stack Development (2022–2023)
          </li>
          <li>
            <strong>KSR College of Engineering</strong> — B.E. (2018–2022)
          </li>
        </ul>
      </div>
      <div className="education-image">
        <img src={EduVector} alt="Education Illustration" />
      </div>
    </div>
  </section>
);

export default Education;
