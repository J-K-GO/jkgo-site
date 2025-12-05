import "../styles/Hero.css";
import WindowIcon from "../assets/imgs/window.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-title">
          Journey of Kernel,
          <br />
          let's GO
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-emoji">:)</div>

            <div className="hero-subtitle">
              Exploring the invisible layers between hardware and software.
            </div>

            <div className="hero-description">
              We explore the hidden boundaries between kernels, virtualization, and system internals.
            </div>

            <div className="hero-status">100% COMPLETE</div>
          </div>

          <div className="hero-image">
            <img src={WindowIcon} alt="Windows Logo" />
          </div>
        </div>

        <button className="hero-button">
          Explore our Work →
        </button>
      </div>
    </section>
  );
}

export default Hero;
