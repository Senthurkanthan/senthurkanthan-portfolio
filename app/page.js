export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Senthurkanthan<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="intro">HELLO, I'M</p>

            <h1>
              Senthurkanthan<span>.</span>
            </h1>

            <h2>DevOps Engineer & Linux Engineer</h2>

            <p className="description">
              I build, deploy, and maintain reliable web applications,
              Linux servers, and cloud infrastructure.
            </p>

            <div className="buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href="https://github.com/Senthurkanthan"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">$</span> whoami
              </p>

              <p className="output">senthurkanthan</p>

              <p>
                <span className="green">$</span> role
              </p>

              <p className="output">DevOps Engineer</p>

              <p>
                <span className="green">$</span> skills
              </p>

              <p className="output">
                Linux · AWS · Node.js · PHP · MySQL · Git
              </p>

              <p>
                <span className="green">$</span>{" "}
                <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <p className="section-label">01 / ABOUT</p>

          <h2>Building reliable systems.</h2>

          <p>
            I am a DevOps and Linux Engineer focused on server administration,
            application deployment, infrastructure management, and maintaining
            reliable production environments.
          </p>
        </section>

        <section id="skills" className="content-section">
          <p className="section-label">02 / SKILLS</p>

          <h2>Technical Stack</h2>

          <div className="skills-grid">
            <div className="skill-card">Linux</div>
            <div className="skill-card">AWS</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">PHP</div>
            <div className="skill-card">MySQL</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">PostgreSQL</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">Nginx</div>
            <div className="skill-card">PM2</div>
            <div className="skill-card">SSL / HTTPS</div>
            <div className="skill-card">WordPress</div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <p className="section-label">03 / EXPERIENCE</p>

          <h2>Experience</h2>

          <div className="experience-card">
            <h3>DevOps Engineer</h3>
            <p>Infrastructure & Application Deployment</p>

            <ul>
              <li>Linux server administration</li>
              <li>Web application deployment</li>
              <li>Node.js and PHP application management</li>
              <li>Database administration</li>
              <li>SSL and HTTPS configuration</li>
              <li>Server performance monitoring</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="content-section">
          <p className="section-label">04 / PROJECTS</p>

          <h2>Selected Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Web Application Infrastructure</h3>
              <p>
                Linux-based infrastructure for Node.js, PHP, databases,
                Nginx, PM2, and SSL-enabled applications.
              </p>
            </div>

            <div className="project-card">
              <h3>AWS Infrastructure</h3>
              <p>
                Application and database infrastructure using AWS services
                with secure networking and deployment practices.
              </p>
            </div>

            <div className="project-card">
              <h3>Server Deployment & Monitoring</h3>
              <p>
                Production application deployment, resource monitoring,
                performance testing, and server optimization.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-label">05 / CONTACT</p>

          <h2>Let's build something reliable.</h2>

          <p>
            Interested in working together or discussing infrastructure,
            DevOps, or deployment?
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-btn"
          >
            Get In Touch
          </a>
        </section>
      </main>
    </>
  );
}
