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
        {/* HERO */}
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

          {/* TERMINAL */}
          <div className="hero-terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">senthurkanthan@devops</span>:~$
              </p>

              <p className="terminal-command">
                whoami
              </p>

              <p className="output">
                DevOps Engineer
              </p>

              <p>
                <span className="green">senthurkanthan@devops</span>:~$
              </p>

              <p className="terminal-command">
                systemctl status nginx
              </p>

              <p className="success">
                ● nginx.service - active (running)
              </p>

              <p>
                <span className="green">senthurkanthan@devops</span>:~$
              </p>

              <p className="terminal-command">
                git status
              </p>

              <p className="success">
                ✓ production environment ready
              </p>

              <p>
                <span className="green">senthurkanthan@devops</span>:~$
                <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="content-section">
          <p className="section-label">01 / ABOUT</p>

          <h2>DevOps meets real-world infrastructure.</h2>

          <p>
            I am a DevOps Engineer and Linux Engineer with hands-on
            experience managing Linux servers, deploying web applications,
            configuring production environments, and maintaining application
            infrastructure.
          </p>

          <p>
            My experience includes Node.js, PHP, MySQL, PostgreSQL, MongoDB,
            Nginx, PM2, SSL/HTTPS, Git, GitHub, WordPress, Drupal, Strapi,
            and AWS infrastructure.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="content-section">
          <p className="section-label">02 / SKILLS</p>

          <h2>My Technical Stack</h2>

          <p>
            Technologies and tools I work with across application deployment,
            Linux administration, databases, and infrastructure.
          </p>

          <div className="skill-groups">
            <div className="skill-group">
              <h3>🐧 Linux & Servers</h3>

              <div className="skill-tags">
                <span>Linux</span>
                <span>Ubuntu</span>
                <span>Nginx</span>
                <span>Apache</span>
                <span>PM2</span>
                <span>SSL / HTTPS</span>
                <span>DNS</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>☁️ Cloud & Infrastructure</h3>

              <div className="skill-tags">
                <span>AWS EC2</span>
                <span>AWS VPC</span>
                <span>Amazon S3</span>
                <span>NAT Gateway</span>
                <span>Vercel</span>
                <span>Hostinger VPS</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>💻 Application Stack</h3>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>PHP</span>
                <span>WordPress</span>
                <span>Drupal</span>
                <span>Strapi</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>🗄️ Databases</h3>

              <div className="skill-tags">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>🔧 Development & Deployment</h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>GitHub Actions</span>
                <span>Composer</span>
                <span>Certbot</span>
                <span>Linux CLI</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="content-section">
          <p className="section-label">03 / EXPERIENCE</p>

          <h2>What I work with.</h2>

          <div className="experience-card">
            <h3>DevOps Engineer</h3>

            <p>Linux • Cloud • Application Infrastructure</p>

            <ul>
              <li>
                Deploying and managing Node.js and PHP applications on Linux
                servers.
              </li>

              <li>
                Configuring Nginx, SSL certificates, domains, DNS, and HTTPS.
              </li>

              <li>
                Managing MySQL, PostgreSQL, and MongoDB databases.
              </li>

              <li>
                Managing Node.js applications using PM2 and monitoring server
                resources.
              </li>

              <li>
                Working with AWS infrastructure including EC2 and application
                environments.
              </li>

              <li>
                Performing server troubleshooting, optimization, and deployment
                activities.
              </li>

              <li>
                Working with Git and GitHub for source-code management and
                deployments.
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section">
          <p className="section-label">04 / PROJECTS</p>

          <h2>Infrastructure I've worked with.</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Node.js Application Infrastructure</h3>

              <p>
                Deployment and management of Node.js applications on Linux
                servers using Nginx, PM2, SSL, Git, and production server
                configurations.
              </p>
            </div>

            <div className="project-card">
              <h3>AWS Web Application Environment</h3>

              <p>
                Application infrastructure using AWS EC2, networking
                components, Linux servers, databases, SSL, and production
                deployment practices.
              </p>
            </div>

            <div className="project-card">
              <h3>PHP & CMS Infrastructure</h3>

              <p>
                Deployment and server management for PHP applications and CMS
                platforms including WordPress, Drupal, and Strapi.
              </p>
            </div>

            <div className="project-card">
              <h3>Production Server Management</h3>

              <p>
                Linux server administration, resource monitoring,
                troubleshooting, application deployment, storage management,
                and performance testing.
              </p>
            </div>

            <div className="project-card">
              <h3>Database Infrastructure</h3>

              <p>
                Managing MySQL, PostgreSQL, and MongoDB databases for web
                applications and production environments.
              </p>
            </div>

            <div className="project-card">
              <h3>Application Deployment</h3>

              <p>
                End-to-end application deployment including server
                configuration, DNS, SSL, reverse proxy configuration, process
                management, and production support.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
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
