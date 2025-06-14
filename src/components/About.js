import React from 'react';
import '../assets/About.css';
import AboutVector from '../assets/about_vector.svg'; // Place an SVG in assets/

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <div className="about-image">
        <img src={AboutVector} alt="About Illustration" />
      </div>
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-paragraph">
          Results-oriented software developer with 2+ years of experience building robust backend and frontend
          systems using Spring Boot, React, and cloud services. Passionate about clean code, system design,
          and solving real-world problems with scalable solutions.
        </p>
      </div>
    </div>
  </section>
);

export default About;
