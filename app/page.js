export default function Home() {
  return (
    <>
      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="navbar">
        <div className="logo">
          Senthurkanthan<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* =========================
            HERO
        ========================== */}
        <section className="hero">
          <div className="hero-content">

            <p className="intro">
              DEVOPS ENGINEER
            </p>

            <h1>
              Senthurkanthan S S<span>.</span>
            </h1>

            <h2>
              DevOps Engineer · AWS & Linux
            </h2>

            <p className="description">
              DevOps Engineer with nearly 2 years of hands-on experience
              in AWS and Linux production environments, application
              deployment, server administration, infrastructure
              configuration and production support.
            </p>

            <div className="buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View Projects
              </a>

              <a
                href="https://github.com/Senthurkanthan"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/senthurkanthan-s-s-653a66195/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>

            </div>
          </div>


          {/* =========================
              TERMINAL
          ========================== */}
          <div className="hero-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">

              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="terminal-command">
                  {" "}whoami
                </span>
              </p>

              <p className="output">
                Senthurkanthan S S
              </p>


              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="terminal-command">
                  {" "}role
                </span>
              </p>

              <p className="output">
                DevOps Engineer
              </p>


              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="terminal-command">
                  {" "}cloud
                </span>
              </p>

              <p className="output">
                AWS · EC2 · VPC · IAM · S3
              </p>


              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="terminal-command">
                  {" "}stack
                </span>
              </p>

              <p className="output">
                Linux · Nginx · PM2 · Node.js
              </p>

              <p className="output">
                MySQL · PostgreSQL · MongoDB
              </p>


              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="terminal-command">
                  {" "}deployment
                </span>
              </p>

              <p className="success">
                ✓ Production deployment ready
              </p>


              <p>
                <span className="green">
                  senthurkanthan@devops
                </span>
                :~$
                <span className="cursor">
                  _
                </span>
              </p>

            </div>
          </div>
        </section>


        {/* =========================
            ABOUT
        ========================== */}
        <section
          id="about"
          className="content-section"
        >

          <p className="section-label">
            01 / ABOUT
          </p>

          <h2>
            Building and maintaining production infrastructure.
          </h2>

          <p>
            I am a DevOps Engineer with nearly 2 years of hands-on
            experience in AWS and Linux production environments.
            My work focuses on server administration, application
            deployment, infrastructure configuration and production
            support.
          </p>

          <p>
            I have deployed and managed 5+ web applications including
            Node.js, PHP, WordPress, Drupal and Strapi across AWS EC2
            and VPS environments.
          </p>

          <p>
            My experience includes Nginx reverse proxy configuration,
            PM2 process management, SSL/HTTPS, DNS configuration,
            database administration, application migration,
            backup and recovery, and Git/GitHub version control.
          </p>

        </section>


        {/* =========================
            SKILLS
        ========================== */}
        <section
          id="skills"
          className="content-section"
        >

          <p className="section-label">
            02 / SKILLS
          </p>

          <h2>
            Technical Stack
          </h2>

          <p>
            Technologies and infrastructure tools I use for
            application deployment, server management and
            production environments.
          </p>


          <div className="skill-groups">

            {/* CLOUD */}
            <div className="skill-group">

              <h3>
                ☁️ Cloud
              </h3>

              <div className="skill-tags">
                <span>AWS EC2</span>
                <span>AWS VPC</span>
                <span>AWS IAM</span>
                <span>Amazon S3</span>
              </div>

            </div>


            {/* DEVOPS */}
            <div className="skill-group">

              <h3>
                🐧 DevOps & Linux
              </h3>

              <div className="skill-tags">
                <span>Linux</span>
                <span>Nginx</span>
                <span>PM2</span>
                <span>Reverse Proxy</span>
                <span>SSL / HTTPS</span>
                <span>CI/CD - Basic</span>
                <span>Docker - Basic</span>
              </div>

            </div>


            {/* APPLICATION */}
            <div className="skill-group">

              <h3>
                💻 Application Deployment
              </h3>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>PHP</span>
                <span>WordPress</span>
                <span>Drupal</span>
                <span>Strapi</span>
              </div>

            </div>


            {/* DATABASE */}
            <div className="skill-group">

              <h3>
                🗄️ Databases
              </h3>

              <div className="skill-tags">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
              </div>

            </div>


            {/* INFRASTRUCTURE */}
            <div className="skill-group">

              <h3>
                🔧 Infrastructure
              </h3>

              <div className="skill-tags">
                <span>DNS Management</span>
                <span>Domain Management</span>
                <span>Server Migration</span>
                <span>Backup & Recovery</span>
              </div>

            </div>


            {/* TOOLS */}
            <div className="skill-group">

              <h3>
                🛠️ Tools
              </h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EXPERIENCE
        ========================== */}
        <section
          id="experience"
          className="content-section"
        >

          <p className="section-label">
            03 / EXPERIENCE
          </p>

          <h2>
            Professional Experience
          </h2>


          {/* CODERZ */}
          <div className="experience-card">

            <h3>
              DevOps Engineer
            </h3>

            <p>
              Coderz Vision Technology
              <br />
              Oct 2024 – Present · Chennai
            </p>

            <ul>

              <li>
                Work with AWS EC2 servers and Linux production
                environments for application hosting, deployment
                and maintenance.
              </li>

              <li>
                Deployed and managed 5+ web applications including
                Node.js, PHP, WordPress, Drupal and Strapi on AWS
                EC2 and VPS environments.
              </li>

              <li>
                Configured Nginx reverse proxy to host and route
                multiple applications and services on a single
                server.
              </li>

              <li>
                Used PM2 for Node.js process management and
                application availability.
              </li>

              <li>
                Implemented SSL/HTTPS, domain and DNS configuration
                for production applications.
              </li>

              <li>
                Installed and configured MySQL, PostgreSQL and
                MongoDB, including backup and recovery activities.
              </li>

              <li>
                Executed application and website migrations between
                AWS and VPS environments with minimal downtime.
              </li>

              <li>
                Troubleshot Linux server, application, database,
                DNS, SSL and deployment issues.
              </li>

            </ul>

          </div>


          {/* GLOBALLOGIC */}
          <div className="experience-card">

            <h3>
              Associate Analyst (AI / LLM)
            </h3>

            <p>
              GlobalLogic
              <br />
              Apr 2024 – Sep 2024 · Chennai
            </p>

            <ul>

              <li>
                Performed data annotation and labeling for AI/ML
                projects.
              </li>

              <li>
                Worked on Amazon Bedrock-based tasks involving
                AI/LLM output evaluation.
              </li>

              <li>
                Reviewed and annotated AI-generated content based
                on task guidelines.
              </li>

            </ul>

          </div>

        </section>


        {/* =========================
            PROJECTS
        ========================== */}
        <section
          id="projects"
          className="content-section"
        >

          <p className="section-label">
            04 / PROJECTS
          </p>

          <h2>
            Key DevOps Projects
          </h2>


          <div className="projects-grid">


            {/* PROJECT 1 */}
            <div className="project-card">

              <h3>
                Multi-Application Deployment Architecture
              </h3>

              <p>
                Designed and deployed a multi-application hosting
                setup using Nginx reverse proxy to route multiple
                applications and services through a single server.
              </p>

              <div className="skill-tags">
                <span>Nginx</span>
                <span>Linux</span>
                <span>Reverse Proxy</span>
              </div>

            </div>


            {/* PROJECT 2 */}
            <div className="project-card">

              <h3>
                Production Server Setup
              </h3>

              <p>
                Built Linux production environments with Nginx,
                SSL/HTTPS, domain configuration and application
                routing for production workloads.
              </p>

              <div className="skill-tags">
                <span>Linux</span>
                <span>Nginx</span>
                <span>SSL</span>
                <span>DNS</span>
              </div>

            </div>


            {/* PROJECT 3 */}
            <div className="project-card">

              <h3>
                Database Management & Backup
              </h3>

              <p>
                Supported installation, configuration, administration,
                backup and recovery activities for MySQL, PostgreSQL
                and MongoDB databases.
              </p>

              <div className="skill-tags">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
              </div>

            </div>


            {/* PROJECT 4 */}
            <div className="project-card">

              <h3>
                Application Migration — AWS to VPS
              </h3>

              <p>
                Migrated applications between AWS and VPS environments,
                including data transfer, DNS switching, validation,
                troubleshooting and production verification.
              </p>

              <div className="skill-tags">
                <span>AWS</span>
                <span>VPS</span>
                <span>DNS</span>
                <span>Migration</span>
              </div>

            </div>


            {/* PROJECT 5 */}
            <div className="project-card">

              <h3>
                Drupal Environment Setup on AWS
              </h3>

              <p>
                Provisioned EC2 infrastructure and configured Linux,
                Nginx, PHP, MySQL, Drupal, DNS and SSL for a production
                Drupal environment.
              </p>

              <div className="skill-tags">
                <span>AWS EC2</span>
                <span>Linux</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Drupal</span>
              </div>

            </div>


            {/* PROJECT 6 */}
            <div className="project-card">

              <h3>
                Strapi on AWS & Next.js on VPS
              </h3>

              <p>
                Deployed a Strapi backend on AWS EC2 using Node.js,
                PM2, Nginx and PostgreSQL with frontend integration
                hosted on VPS infrastructure.
              </p>

              <div className="skill-tags">
                <span>Strapi</span>
                <span>Node.js</span>
                <span>PM2</span>
                <span>PostgreSQL</span>
                <span>Next.js</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CERTIFICATIONS
        ========================== */}
        <section
          id="certifications"
          className="content-section"
        >

          <p className="section-label">
            05 / CERTIFICATIONS
          </p>

          <h2>
            Certifications
          </h2>

          <div className="skills-grid">

            <div className="skill-card">
              AWS Certified Solutions Architect
              <br />
              <small>
                MakInfraTek
              </small>
            </div>

            <div className="skill-card">
              AWS DevOps Certification
              <br />
              <small>
                MakInfraTek
              </small>
            </div>

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================== */}
        <section
          id="education"
          className="content-section"
        >

          <p className="section-label">
            06 / EDUCATION
          </p>

          <h2>
            Education
          </h2>

          <div className="experience-card">

            <h3>
              Bachelor of Engineering (B.E.)
            </h3>

            <p>
              Civil Engineering
              <br />
              R.M.K Engineering College
              <br />
              2017 – 2021
            </p>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================== */}
        <section
          id="contact"
          className="content-section contact-section"
        >

          <p className="section-label">
            07 / CONTACT
          </p>

          <h2>
            Let's connect.
          </h2>

          <p>
            Interested in discussing DevOps, Linux infrastructure,
            application deployment or a potential opportunity?
          </p>

          <div className="buttons">

            <a
              href="mailto:senthursai66@gmail.com"
              className="primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/senthurkanthan-s-s-653a66195/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              LinkedIn
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

        </section>

      </main>
    </>
  );
}
