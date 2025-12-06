import { useEffect, useState } from "react";
import "../styles/Terminal.css";

function Terminal() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="terminal-section">
      <div className="terminal-container" data-aos="fade-up" data-aos-delay="200">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
            </div>
          </div>

          <div className="terminal-body">
            <div className="terminal-line terminal-first-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-path">./jkdbg-plugin</span>
            </div>

            {showContent && (
              <>
                <div className="terminal-line typing-animation delay-1">
                  <span className="terminal-text">Starting QEMU virtual machine...</span>
                </div>

                <div className="terminal-line typing-animation delay-2">
                  <span className="terminal-check">✓</span>
                  <span className="terminal-success">VM initialized</span>
                </div>

                <div className="terminal-line typing-animation delay-3">
                  <span className="terminal-check">✓</span>
                  <span className="terminal-success">
                    GDB server listening on <span className="terminal-highlight">:1234</span>
                  </span>
                </div>

                <div className="terminal-line typing-animation delay-4">
                  <span className="terminal-check">✓</span>
                  <span className="terminal-success">
                    Ready to debug <span className="terminal-keyword">kernel</span>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Terminal;
