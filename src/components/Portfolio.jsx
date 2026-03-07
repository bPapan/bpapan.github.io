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
            <a href="https://scholar.google.com/citations?user=N0tlETYAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><i className="fa fa-graduation-cap"></i></a>
            <a href="https://www.linkedin.com/in/bishal-basak-papan-497383142/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>  
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
							<p>Hello Everybody, I am Bishal Basak Papan, a Graduate Teaching Assistant at <a href="https://www.cs.purdue.edu/graduate/index.html">Purdue University. </a></p>
							{/* <p>I am Interested in doing research on Software Engineering, Machine Learning, Security and Algorithms. Also, I like developing Software Systems.</p> */}
							<p> I am a Third year Computer Science Ph.D. student, advised by <a href="https://yonglezh-purdue.github.io/">Dr. Yongle Zhang</a>. My research focus is <br></br>
              Machine Learning assisted Software Engineering. 
							</p>
						  </div>
        </section>

        <section id="experience" className="portfolio-section">
          <h2>Experience</h2>

          <div className="experience-item">
            <h3>Graduate Teaching Assistant</h3>
            <p className="experience-location"><strong>Purdue University</strong>, West Lafayette, Indiana</p>
            <p className="experience-date">January 2024 - Present</p>
            <p><strong>Courses:</strong></p>
            <ul>
              <li>CS 252 Systems Programming (Spring 2024, Spring 2025, Summer 2025, Spring 2026)</li>
              <li>CS 307 Software Engineering I (Fall 2024, Fall 2025)</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Software Developer (Remote)</h3>
            <p className="experience-location">
              <a href="https://www2.inceptasolutions.com/" target="_blank" rel="noreferrer"><strong>Incepta Solutions Inc</strong></a>, Ontario, Canada
            </p>
            <p className="experience-date">June 2021 - July 2023</p>
            <p><strong>Projects:</strong></p>
            <ul>
              <li>
                API integration through <a href="https://www.mulesoft.com/" target="_blank" rel="noreferrer">MuleSoft</a> for{' '}
                <a href="https://www2.inceptasolutions.com/smartconnect/" target="_blank" rel="noreferrer">Incepta SmartConnect</a>,
                an IoT platform solution: connected systems like SMTP, Twilio, Azure with SmartConnect portal through MuleSoft
              </li>
              <li>
                MuleSoft Integration support for{' '}
                <a href="https://www.tngoc.com/" target="_blank" rel="noreferrer">The Nationwide Group of Companies</a>:
                worked on migrating NAS mobile app middleware from Mule 3.9 to Mule 4.4 using MuleSoft and Java
              </li>
              <li>
                <a href="https://www2.inceptasolutions.com/hrtech/" target="_blank" rel="noreferrer">Incepta HRTech</a>,
                HR Automation system that enables faster HR on-boarding: implemented a proof-of-concept applicant tracking system
                using React, TypeScript, Workato and Salesforce
              </li>
            </ul>
          </div>
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

          <div className="project-item">
            <div className="project-header">
              <h3>UpFuzz</h3>
              <a href="https://github.com/zlab-purdue/upfuzz" target="_blank" rel="noreferrer" className="project-github">GitHub</a>
            </div>
            <ul>
              <li>A framework for detecting upgrade bugs for distributed storage systems</li>
              <li>Implemented an efficient feedback collection technique using parallel execution of tests.</li>
              <li>Integrated a virtual machine based snapshot mechanism to improve the efficiency of the framework.</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3>Automated Generation of Verus Specs through LLM</h3>
              <a href="https://github.com/Athryx/560_project" target="_blank" rel="noreferrer" className="project-github">GitHub</a>
            </div>
            <ul>
              <li>Integration of symbolic execution tools like Seahorn and Crucible with AutoVerus</li>
              <li>Users can write only the preconditions and the postconditions of a Rust program, and our pipeline generates a Verus Specification from that</li>
              <li>The output of running symbolic execution tools on the rust program are used to assist the LLM get better results in fewer iterations</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3>GPS Spoofing Detection in VANETs using ML</h3>
            </div>
            <ul>
              <li>
                Detection of GPS Spoofing attack in a VANET from three consecutive BSM packets using the{' '}
                <a href="https://veremi-dataset.github.io/" target="_blank" rel="noreferrer">VeReMi</a> dataset
              </li>
              <li>Performance comparison with existing two consecutive BSM approach on KNN, Naive Bayes, Decision Tree and Random Forest models</li>
              <li>Analyzing how three consecutive BSM approach beats the existing two consecutive BSM approach</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3>A Comparison of Modern JVM Based Garbage Collectors</h3>
              <a href="https://github.com/bPapan/Peformance-Study-of-Modern-JVM-GCs" target="_blank" rel="noreferrer" className="project-github">GitHub</a>
            </div>
            <ul>
              <li>A study of the performance of three JVM based garbage collectors: G1GC, ZGC and Shenandoah</li>
              <li>
                Observed performance variation with modifying heap sizes by analyzing log files using{' '}
                <a href="https://gceasy.io/" target="_blank" rel="noreferrer">GCEasy</a>
              </li>
              <li>Comparing their performance on several big-data benchmarks from two Benchmark Suites: Renaissance and DaCapo, on OpenJDK Java version 11.0.15</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3>Predicting Football Players' Injuries from Past Injuries</h3>
            </div>
            <ul>
              <li>Developed crawlers to collect data from a website and collected injury history along with other relevant data of around 4000 footballers currently playing</li>
              <li>Used deep learning models to predict footballers' injuries using time series forecasting techniques</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
