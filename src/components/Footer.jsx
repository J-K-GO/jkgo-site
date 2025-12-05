import "../styles/Footer.css";
import GitHubIcon from "../assets/icons/github-icon.svg";
import GitbookIcon from "../assets/icons/gitbook-icon.svg";
import EmailIcon from "../assets/icons/mail-icon.svg";
import CopyrightIcon from "../assets/icons/copyright-icon.svg";

function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: GitHubIcon, href: "https://github.com/J-K-GO" },
    { name: "Email", icon: EmailIcon, href: "mailto:jkgo@jkgo.kr" },
    { name: "GitBook", icon: GitbookIcon, href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">J.K.GO</h3>
            <p className="footer-tagline">Journey of Kernel, let's GO</p>
          </div>

          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            <img src={CopyrightIcon} alt="Copyright" className="copyright-icon" />
            2025 J.K.GO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
