import UIFramework, { useEffect } from "ui-library";

// Scroll animation helper
import { runScrollAnimation } from "utils/scrollAnimation";

// Blog content source
import blogData from "data/blogPosts";

export default function BlogPage() {
  useEffect(() => {
    // Enable animations for blog cards
    runScrollAnimation(".animated-card");
  }, []);

  return (
    <section className="page-wrapper">
      <h2 className="page-title">My Blogs</h2>

      <div className="card-grid">
        {blogData.map((item) => (
          <article key={item.id} className="animated-card blog-card">
            <h3 className="card-title">{item.title}</h3>
            <span className="card-date">{item.date}</span>

            <p className="card-summary">
              {item.summary}
            </p>

            <a href={item.url} className="card-link">
              Read more →
            </a>
          </article>
        ))}
      </div>

      <footer className="page-footer">
        <h3>More content coming soon…</h3>
      </footer>
    </section>
  );
}
