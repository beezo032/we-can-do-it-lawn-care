import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Column 1: About / Logo */}
        <div className="footer-col footer-about">
          <a href="#hero" className="logo">
            <i className="fa-solid fa-leaf logo-icon"></i>
            <div className="logo-text">
              <span className="brand-name">We Can Do It!</span>
              <span className="brand-sub">Lawn & Landscape</span>
            </div>
          </a>
          <p className="footer-desc">
            Professional, family-owned lawn care and landscaping services serving Summerville, SC and surrounding areas. We make lawn maintenance completely hassle-free.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://google.com" target="_blank" rel="noreferrer" aria-label="Google Maps"><i className="fa-brands fa-google"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero"><i className="fa-solid fa-chevron-right"></i> Home</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Services</a></li>
            <li><a href="#why-choose-us"><i className="fa-solid fa-chevron-right"></i> Why Choose Us</a></li>
            <li><a href="#gallery"><i className="fa-solid fa-chevron-right"></i> Photo Gallery</a></li>
            <li><a href="#service-area"><i className="fa-solid fa-chevron-right"></i> Service Area</a></li>
            <li><a href="#contact"><i className="fa-solid fa-chevron-right"></i> Get a Free Quote</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Weekly Lawn Mowing</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Yard Cleanups</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Flowerbed Mulching</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Grass Seeding</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Lawn Weed Control</a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> Shrub Trimming</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info & Hours */}
        <div className="footer-col footer-contact">
          <h3>Contact Info</h3>
          <ul className="contact-details">
            <li>
              <i className="fa-solid fa-phone"></i>
              <div>
                <span>Call or Text:</span>
                <a href="tel:8435550199">(843) 555-0199</a>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <span>Email Us:</span>
                <a href="mailto:info@wecandoitlawn.com">info@wecandoitlawn.com</a>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <span>Location:</span>
                <p>Summerville, SC 29483</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {currentYear} We Can Do It! Lawn & Landscape LLC. All Rights Reserved.</p>
          <div className="footer-legal">
            <span>Licensed & Insured in South Carolina</span>
            <span className="divider">|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
