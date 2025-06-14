import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1 className="site-title">Sabareeswaran M</h1>
        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#education">EDUCATION</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <div id="about"><About /></div>
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sabareeswaran M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
