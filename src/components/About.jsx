import "../styles/About.css";

function About() {
  const features = [
    {
      number: "01",
      title: "QEMU Plugin Architecture",
      description:
        "Runtime VM instrumentation via QEMU's plugin API without source modification.",
    },
    {
      number: "02",
      title: "Shared Memory IPC",
      description:
        "Lock-free real-time memory dumps using POSIX shared memory with near-zero overhead.",
    },
    {
      number: "03",
      title: "Time-Travel Debugging",
      description:
        "Snapshot-based temporal debugging with timeline navigation for up to 100 VM states.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-title">About</div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.number} className="feature-card">
              <div className="feature-number">{feature.number}</div>
              <div className="feature-title">{feature.title}</div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
