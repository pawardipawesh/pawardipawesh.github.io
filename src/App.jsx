import { useState } from "react";

const timeline = [
  { period: "Oct 2026 — now", company: "Oracle", role: "Senior Principal Data Scientist · Fusion Data Intelligence" },
  { period: "May 2024 — Oct 2026", company: "Oracle", role: "Principal Data Scientist · Fusion Data Intelligence" },
  { period: "Feb 2024 — May 2024", company: "ServiceNow", role: "Senior Applied Scientist" },
  { period: "Mar 2020 — Feb 2024", company: "Oracle", role: "Senior Data Scientist, then Principal Data Scientist" },
  { period: "Apr 2018 — Mar 2020", company: "Springer Nature", role: "Data Scientist" },
  { period: "Oct 2016 — Mar 2018", company: "Genpact", role: "Consultant" },
];

const projects = [
  {
    number: "01",
    title: "Oracle AI Concierge",
    summary: "An AI assistant for Oracle Fusion Data Intelligence. My work spans retrieval, semantic caching, inference speed, and recommendations that help people find dashboards, KPIs, and data.",
    link: "https://www.ateam-oracle.com/introducing-the-fusion-ai-data-platform-meet-your-ai-concierge",
    linkLabel: "Read the introduction",
  },
  {
    number: "02",
    title: "Semantic cache · 70% lower latency",
    summary: "Implemented a semantic cache that reduced latency by 70% in the AI Concierge experience.",
  },
  {
    number: "03",
    title: "Faster vector-store creation",
    summary: "Reduced vector-store creation time from 50+ hours to 3+ hours for industry-grade loads.",
  },
  {
    number: "04",
    title: "ServiceNow ATF test-step generation",
    summary: "Applied generative AI to automate test-step creation for ServiceNow’s Automated Test Framework.",
    link: "https://www.servicenow.com/products/automated-test-framework.html",
    linkLabel: "About ServiceNow ATF",
  },
  {
    number: "05",
    title: "Oracle FAIDP analytics-script error correction",
    summary: "Worked on error correction for the Oracle Fusion Analytics data-action scripting language.",
    link: "https://docs.oracle.com/en/cloud/saas/analytics/26r2/fawag/da-script-code-assistant.html",
    linkLabel: "Explore the documentation",
  },
  {
    number: "06",
    title: "Machine-learning-based spend classification",
    summary: "A machine-learning project focused on classifying business spend.",
  },
];

const courses = [
  "Structuring Machine Learning Projects",
  "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
  "Neural Networks and Deep Learning",
  "Sequence Models",
  "Reinforcement Learning",
];

const navLinks = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Projects", "#projects"],
  ["Learning", "#learning"],
  ["Achievements", "#more"],
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dipawesh Pawar, home">DP</a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className={`menu-mark ${menuOpen ? "is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Data science · applied AI · real products</p>
            <h1 id="hero-title">Hey, I’m<br /><em>Dipawesh Pawar</em></h1>
            <p className="hero-lede">I build AI systems that make complex data products easier to use.</p>
            <p className="hero-role">Senior Principal Data Scientist <span>at</span> <a href="https://www.oracle.com/" target="_blank" rel="noreferrer">Oracle Fusion Data Intelligence</a></p>
            <p className="hero-intro">My work brings together retrieval, language models, and product thinking—so people can find useful answers in enterprise data with less friction.</p>
            <div className="hero-links">
              <ExternalLink href="https://www.linkedin.com/in/dipaweshpawar">LinkedIn</ExternalLink>
              <ExternalLink href="https://github.com/pawardipawesh">GitHub</ExternalLink>
              <a href="mailto:dipaweshpawar@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Areas of work">
            <span className="note-kicker">A simple way to put it</span>
            <p>Applied AI<br /><span>for</span> useful products.</p>
            <span className="note-rule" aria-hidden="true" />
            <span className="note-small">Retrieval · inference · product impact</span>
          </aside>
        </section>

        <section className="section page-width about-section" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><p>About</p></div>
          <div className="section-main about-grid">
            <div>
              <h2 id="about-title">From machine learning<br />to useful AI products.</h2>
              <p className="section-intro">I’m a data scientist working at the intersection of machine learning, enterprise data, and product experiences.</p>
            </div>
            <div className="body-copy">
              <p>Today, I work on Oracle Fusion Data Intelligence—building AI experiences that help people navigate dashboards and KPIs, ask questions about their data, and get grounded, source-cited answers.</p>
              <p>Across my career, I’ve worked on data science, natural-language processing, retrieval, and generative AI. I like turning complex technical ideas into systems people can trust and use.</p>
            </div>
          </div>
        </section>

        <section className="section page-width work-section" id="work" aria-labelledby="work-title">
          <div className="section-label"><span>02</span><p>Work</p></div>
          <div className="section-main">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow accent">A brief timeline</p>
                <h2 id="work-title">A career spent making data useful.</h2>
              </div>
              <p className="heading-aside">Data science, applied AI, and product work across enterprise software and research.</p>
            </div>
            <ol className="timeline">
              {timeline.map((item) => (
                <li className="timeline-row" key={`${item.company}-${item.period}`}>
                  <time>{item.period}</time>
                  <div><strong>{item.company}</strong><span>{item.role}</span></div>
                </li>
              ))}
              <li className="timeline-row earlier-row">
                <span className="earlier-label">Earlier</span>
                <div><strong>Cognizant · IIT Patna · IIT Delhi · Learnix</strong><span>NLP internship, research, and teaching roles</span></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section page-width projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-label"><span>03</span><p>Projects</p></div>
          <div className="section-main">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow accent">Selected work &amp; impact</p>
                <h2 id="projects-title">A few things I’ve worked on.</h2>
              </div>
              <p className="heading-aside">Each one starts with a practical problem and ends with something people can use.</p>
            </div>
            <ol className="project-list">
              {projects.map((project) => (
                <li className="project-row" key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    {project.link && <ExternalLink href={project.link} className="project-link">{project.linkLabel}</ExternalLink>}
                  </div>
                  {project.link && <span className="project-arrow" aria-hidden="true">↗</span>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section page-width learning-section" id="learning" aria-labelledby="learning-title">
          <div className="section-label"><span>04</span><p>Learning</p></div>
          <div className="section-main learning-grid">
            <div>
              <p className="eyebrow accent">Always learning</p>
              <h2 id="learning-title">Keeping the fundamentals close.</h2>
              <p className="learning-intro">I keep learning across machine learning and the systems that bring it into real products.</p>
            </div>
            <div className="learning-details">
              <div className="topic-list" aria-label="Learning topics">
                <span>Retrieval-augmented generation</span>
                <span>LLM inference optimization</span>
                <span>Reinforcement learning</span>
              </div>
              <h3>Courses &amp; study</h3>
              <ul className="course-list">
                {courses.map((course) => <li key={course}>{course}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section page-width more-section" id="more" aria-labelledby="more-title">
          <div className="section-label"><span>05</span><p>Achievements</p></div>
          <div className="section-main more-grid">
            <div>
              <p className="eyebrow accent">Recognition &amp; research</p>
              <h2 id="more-title">Curiosity, craft, and recognition.</h2>
            </div>
            <div className="more-list">
              <p><strong>Most Valued Player</strong><span>Recognition at Oracle</span></p>
              <p><strong>GATE Scholarship</strong><span>Academic scholarship</span></p>
              <p><strong>Publication</strong><span>“Building Tempo-HindiWordnet” — a resource for temporal information access in Hindi</span></p>
              <p><strong>Patent</strong><span>System and method for profile matching and generating gap scores and upskilling recommendations</span></p>
            </div>
          </div>
        </section>

        <section className="contact-section page-width" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow accent">Let’s connect</p>
          <h2 id="contact-title">Have a problem worth making simpler?</h2>
          <p>I’m open to thoughtful conversations, collaborations, and new challenges in applied AI and data science.</p>
          <div className="contact-links">
            <a className="contact-primary" href="mailto:dipaweshpawar@gmail.com">Email me <span aria-hidden="true">↗</span></a>
            <ExternalLink href="https://www.linkedin.com/in/dipaweshpawar">LinkedIn</ExternalLink>
            <ExternalLink href="https://github.com/pawardipawesh">GitHub</ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand" href="#top" aria-label="Back to top">DP</a>
        <p>Dipawesh Pawar · Senior Principal Data Scientist</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
