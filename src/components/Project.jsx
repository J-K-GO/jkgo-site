import "../styles/Project.css";

function Project() {
  const coreFeatures = [
    {
      number: "01",
      title: "Real-time Physical Memory Dump",
      description:
        "Dumps guest memory to shared memory with lock-free synchronization.",
    },
    {
      number: "02",
      title: "Live Memory Hex Editor",
      description:
        "Hex editor with shared memory reading and message queue writing.",
    },
    {
      number: "03",
      title: "Dirty Page Tracking",
      description:
        "Automatic page-level write tracking with sync notifications.",
    },
    {
      number: "04",
      title: "Snapshot Timeline",
      description:
        "Up to 100 VM snapshots with 10ms intervals and instant restoration.",
    },
    {
      number: "05",
      title: "Integrated GDB Console",
      description: "Embedded GDB terminal with MI protocol and GEF support.",
    },
    {
      number: "06",
      title: "Built-in VNC Display",
      description: "Native VNC client for real-time framebuffer rendering.",
    },
  ];

  const keywords = [
    "QEMU Plugin API",
    "Shared Memory",
    "Time-Travel Debugging",
    "GDB/MI",
    "VNC",
    "QMP",
    "Dirty Page Tracking",
    "Qt GUI",
    "Reverse Engineering",
  ];

  return (
    <section id="projects" className="project">
      <div className="project-container">
        <div className="project-header">
          <div className="project-title" data-aos="fade-down">
            Project
          </div>

          <div
            className="project-description-panel"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="panel-label">JKDBG-Plugin</div>
            <p className="project-description">
              VM debugging toolkit with three QEMU plugins and Qt GUI for live
              memory inspection, temporal debugging, and system analysis.
            </p>
          </div>
        </div>

        <div className="features-section">
          <div className="section-label" data-aos="fade-up">
            6 Core Features
          </div>
          <div className="project-features-grid">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.number}
                className="feature-module"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="module-number">{feature.number}</div>
                <div className="module-title">{feature.title}</div>
                <p className="module-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-footer">
          <div className="keywords-section" data-aos="fade-up">
            <div className="keywords-label">Keywords</div>
            <div className="keywords-list">
              {keywords.map((keyword, index) => (
                <span key={index} className="keyword-tag">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div
            className="project-links"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://github.com/J-K-GO"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              GitHub →
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Documentation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
