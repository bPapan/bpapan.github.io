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
          <p className="sidebar-affiliation">Purdue University <br /> West Lafayette, Indiana </p>
          {/* <p className="sidebar-affiliation"></p> */}
          <div className="sidebar-links">
            <a href="mailto:bbasakpapan@gmail.com" aria-label="Email"><i className="fa fa-envelope"></i></a>
            <a href="https://bpapan.github.io/CV/" target="_blank" rel="noreferrer" aria-label="CV"><i className="fa fa-file-pdf-o"></i></a>
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
          {/* <p>Content coming soon.</p> */}
          <div className="personal_text">
							<p>Hello Everybody, I am Bishal Basak Papan, a Graduate Teaching Assistant at <a href="https://www.cs.purdue.edu/graduate/index.html">Purdue University</a></p>
							{/* <p>I am Interested in doing research on Software Engineering, Machine Learning, Security and Algorithms. Also, I like developing Software Systems.</p> */}
							<p> I am a Third year Computer Science Ph.D. student. My research focus is on Machine Learning assisted Software Engineering. <br></br>
								My advisor is <a href="https://yonglezh-purdue.github.io/">Dr. Yongle Zhang.</a><br></br>
							</p>
						  </div>
        </section>

        <section id="experience" className="portfolio-section">
          <h2>Experience</h2>
          <p>Content coming soon.</p>
        </section>

        <section id="publications" className="portfolio-section">
          <h2>Publications</h2>
          <ul className="publications-list">
            <li>
              Ke Han, PC Sruthi, Yayu Wang, Yaoxu Song, <strong>Bishal Basak Papan</strong>, Junwen Yang, Pedro Fonseca, Yongle Zhang,
              "UpFuzz: Detecting Data Format Incompatibility Bugs During Distributed Storage System Upgrade", (Accepted at) {' '} 
              <a href="https://www.usenix.org/conference/nsdi26/presentation/han" target="_blank" rel="noreferrer">
               23rd USENIX Symposium on Networked Systems Design and Implementation (NSDI '26)
              </a>, Renton, Washington.
            </li>
            <li>
              Zahin Wahab, <strong>Bishal Basak Papan</strong>, Md. Shohrab Hossain, Md. Atiquzzaman,
              "Dealing with Smart GPS Spoofing Attacks in VANETs: 3BSM Approach",{' '}
              <a href="https://ieeexplore.ieee.org/abstract/document/10623066" target="_blank" rel="noreferrer">
                2024 IEEE International Conference on Communications (ICC)
              </a>, Denver, Colorado.
            </li>
            <li>
              Sheikh Azizul Hakim, <strong>Bishal Basak Papan</strong>, Md. Saidur Rahman,
              "New Results on Pairwise Compatibility Graphs",{' '}
              <a href="https://doi.org/10.1016/j.ipl.2022.106284" target="_blank" rel="noreferrer">
                Information Processing Letters
              </a>, Elsevier, May 2022.
            </li>
            <li>
              <strong>Bishal Basak Papan</strong>, Protik Bose Pranto, Md. Saidur Rahman,
              "On 2-Interval Pairwise Compatibility Properties of Two Classes of Grid Graphs",{' '}
              <a href="https://academic.oup.com/comjnl/advance-article-abstract/doi/10.1093/comjnl/bxac011/6536120" target="_blank" rel="noreferrer">
                The Computer Journal
              </a>, Oxford University Press, February 2022.
            </li>
            <li>
              Protik Bose Pranto, <strong>Bishal Basak Papan</strong>, Md. Saidur Rahman,
              "k-Safe Labelings of Connected Graphs",{' '}
              <a href="https://doi.org/10.1109/ICTP53732.2021.9744182" target="_blank" rel="noreferrer">
                2021 IEEE International Conference on Telecommunication and Photonics (ICTP)
              </a>, Dhaka, Bangladesh.
            </li>
          </ul>
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
