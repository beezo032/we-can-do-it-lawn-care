import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll handler to make navbar sticky with background shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="logo">
            <i className="fa-solid fa-leaf logo-icon"></i>
            <div className="logo-text">
              <span className="brand-name">We Can Do It!</span>
              <span className="brand-sub">Lawn & Landscape</span>
            </div>
          </a>

          {/* Hamburger Icon */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#why-choose-us" onClick={() => setIsOpen(false)}>Why Choose Us</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#service-area" onClick={() => setIsOpen(false)}>Service Area</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li className="nav-cta-mobile">
              <a href="tel:8435550199" className="btn btn-primary btn-sm">
                <i className="fa-solid fa-phone"></i> (843) 555-0199
              </a>
            </li>
          </ul>

          {/* CTA Button Desktop */}
          <div className="nav-cta">
            <a href="tel:8435550199" className="btn btn-primary">
              <i className="fa-solid fa-phone"></i> (843) 555-0199
            </a>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Click-to-Call Button */}
      <a href="tel:8435550199" className="mobile-call-fab" aria-label="Call lawn care team now">
        <i className="fa-solid fa-phone"></i>
      </a>
    </>
  );
}
