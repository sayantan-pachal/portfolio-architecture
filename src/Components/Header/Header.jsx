import UIFramework, { useState, useEffect } from "ui-library";
import { MenuIcon, CloseIcon } from "icon-library";
import { NavLink, Link } from "routing-library";

import BrandLogo from "components/BrandLogo";
import ThemeSwitcher from "components/ThemeSwitcher";

export default function Header() {
  const navigation = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/education", name: "Education" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu when switching to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-container">
        <Link to="/" className="brand">
          <BrandLogo />
        </Link>

        {/* Right-side actions */}
        <div className="nav-actions">
          <ThemeSwitcher />

          <Link to="/resume" className="action-link desktop-only">
            Resume
          </Link>

          <Link to="/blog" className="action-button desktop-only">
            Blog
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mobile-overlay">
            <div
              className="overlay-backdrop"
              onClick={() => setMenuOpen(false)}
            />

            <div className="mobile-menu">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-link"
                >
                  {item.name}
                </NavLink>
              ))}

              <Link to="/resume" className="mobile-link">
                Resume
              </Link>

              <Link to="/blog" className="mobile-button">
                Blog
              </Link>
            </div>
          </div>
        )}

        {/* Desktop navigation */}
        <ul className="desktop-menu">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className="desktop-link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
