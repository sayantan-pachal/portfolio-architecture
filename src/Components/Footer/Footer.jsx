import UIFramework from "ui-library";
import { NavLink } from "routing-library";

import BrandLogo from "components/BrandLogo";
import NavigationLinks from "components/NavigationLinks";
import SocialLinks from "components/SocialLinks";

import CountryIcon from "assets/country-icon";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand + short intro */}
          <div className="footer-brand">
            <NavLink to="/">
              <BrandLogo />
            </NavLink>

            <p className="footer-tagline">
              Crafting clean web experiences • Exploring AI • Always learning
            </p>

            <div className="footer-social">
              <h4>Follow me</h4>
              <SocialLinks />
            </div>
          </div>

          {/* Footer navigation sections */}
          <div className="footer-links">
            <div>
              <h4>Navigation</h4>
              <NavigationLinks />
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>Email me</li>
                <li>Based in India</li>
                <li>Open for opportunities</li>
              </ul>
            </div>

            <div>
              <h4>Legal</h4>
              <ul>
                <li><NavLink to="#">Privacy Policy</NavLink></li>
                <li><NavLink to="#">Terms & Conditions</NavLink></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} • All rights reserved</span>

          <span>
            Made in <img src={CountryIcon} alt="Country" />
          </span>

          <span>Designed & built with care</span>
        </div>
      </div>
    </footer>
  );
}
