import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import About from "./components/About";
import Project from "./components/Project";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import MoonIcon from "./assets/imgs/moon.svg";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });

    const starsContainer = document.createElement("div");
    starsContainer.className = "stars";
    document.body.prepend(starsContainer);

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 3 + 1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      starsContainer.appendChild(star);
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <LanguageProvider>
      <img src={MoonIcon} alt="Moon" className="site-moon-bg" />
      <Header />
      <Hero />
      <Terminal />
      <About />
      <Project />
      <Team />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
