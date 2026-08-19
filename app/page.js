export default function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="intro">HELLO, I'M</p>

        <h1>
          Senthurkanthan
          <span>.</span>
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
    </main>
  );
}
