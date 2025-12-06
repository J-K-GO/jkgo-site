import "../styles/Contact.css";
import GitHubIcon from "../assets/icons/github-icon.svg";
import GitbookIcon from "../assets/icons/gitbook-icon.svg";
import EmailIcon from "../assets/icons/mail-icon.svg";

function Contact() {
  const channels = [
    {
      name: "GitHub",
      label: "Primary Channel",
      icon: GitHubIcon,
      link: "https://github.com/J-K-GO",
      angle: 0,
    },
    {
      name: "Email",
      label: "Secure Channel",
      icon: EmailIcon,
      link: "mailto:jkgo@jkgo.kr",
      angle: 120,
    },
    {
      name: "GitBook",
      label: "Data Stream",
      icon: GitbookIcon,
      link: "#",
      angle: 240,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-title" data-aos="fade-down">
          Contact
        </div>

        <div className="satellite-system" data-aos="zoom-in" data-aos-delay="100">
          <div className="transmitter">
            <div className="transmitter-core">
              <div className="signal-pulse"></div>
              <div className="signal-pulse delay-1"></div>
              <div className="signal-pulse delay-2"></div>
              <div className="transmitter-text">UPLINK</div>
            </div>
          </div>

          <div className="orbit-ring"></div>
          <div className="orbit-ring-outer"></div>

          {channels.map((channel, index) => (
            <div
              key={channel.name}
              className="satellite-channel"
              style={{
                "--angle": `${channel.angle}deg`,
                "--delay": `${index * 0.3}s`,
              }}
            >
              <div className="channel-orbit">
                <a
                  href={channel.link}
                  className="channel-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="channel-icon">
                    <img src={channel.icon} alt={channel.name} />
                  </div>
                  <div className="signal-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="contact-status"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="status-dot"></span>
          All systems operational - Ready for transmission
        </div>
      </div>
    </section>
  );
}

export default Contact;
