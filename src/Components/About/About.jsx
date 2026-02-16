import UIFramework, { useEffect } from "ui-library";

// Page-specific content source
import aboutData from "data/about";

// Scroll-based animation helper
import { triggerScrollAnimation } from "utils/scrollAnimation";

export default function AboutPage() {
  useEffect(() => {
    // Activate animations for visible elements
    triggerScrollAnimation(".animated-item");
  }, []);

  return (
    <section className="page-section" role="main">
      <header className="section-header">
        <h2>Behind the Code</h2>
      </header>

      <div className="content-wrapper">
        <div className="layout-grid">
          <div className="media-block">
            <img
              src={aboutData.profileImage}
              alt="Profile visual"
              className="media-image"
            />
          </div>

          <div className="text-block">
            <h3 className="animated-item">
              {aboutData.tagline}
            </h3>

            <div className="text-content">
              {aboutData.description.map((paragraph, idx) => (
                <p key={idx} className="animated-item">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
