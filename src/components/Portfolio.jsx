import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* Sidebar / Left Column */}
      <aside className="portfolio-sidebar">
        <div className="sidebar-photo-wrapper">
          <img
            src="img/20240512_060911.jpg"
            alt="Bishal Basak Papan"
            className="sidebar-photo"
          />
        </div>
        <div className="sidebar-info">
          <h1 className="sidebar-name">Bishal Basak Papan</h1>
          <p className="sidebar-title">Ph.D. Student, Computer Science</p>
          <p className="sidebar-affiliation">Purdue University</p>
          <div className="sidebar-links">
            <a href="mailto:bbasak@purdue.edu" aria-label="Email"><i className="fa fa-envelope"></i></a>
            <a href="https://github.com/bPapan" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa fa-github"></i></a>
            <a href="https://scholar.google.com/" target="_blank" rel="noreferrer" aria-label="Google Scholar"><i className="fa fa-graduation-cap"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </aside>

      {/* Main Content / Right Column */}
      <main className="portfolio-content">
        <nav className="portfolio-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
        </nav>

        <section id="about" className="portfolio-section">
          <h2>About</h2>
          <p>Content coming soon.</p>
        </section>

        <section id="experience" className="portfolio-section">
          <h2>Experience</h2>
          <p>Content coming soon.</p>
        </section>

        <section id="publications" className="portfolio-section">
          <h2>Publications</h2>
          <p>Content coming soon.</p>
        </section>

        <section id="projects" className="portfolio-section">
          <h2>Projects</h2>
          <p>Content coming soon.</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
