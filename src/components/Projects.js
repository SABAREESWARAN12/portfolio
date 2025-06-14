import React from 'react';
import '../assets/Projects.css';
import ProjectsVector from '../assets/projects_vector.svg';

const Projects = () => (
  <section className="projects-section">
    <div className="projects-content">
      <div className="projects-image">
        <img src={ProjectsVector} alt="Projects Illustration" />
      </div>
      <div className="projects-text">
        <h2 className="projects-title">Projects</h2>
        <ul className="projects-list">
          <li>
            <strong>Developer Task Management:</strong> To-do app that tracks and notifies developers of deadlines.
          </li>
          <li>
            <strong>Static Web Application:</strong> Built a product showcase website for a client.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
