import React from 'react';

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <span className="badge hero-badge animate-pulse">
            <i className="fa-solid fa-medal"></i> Summerville's #1 Rated Lawn Care Crew
          </span>
          <h1>Summerville's Premier Lawn Care & Landscaping Specialists</h1>
          <p className="hero-lead">
            We build and maintain pristine lawns for busy SC homeowners. Get reliable, professional yard service with <strong>100% transparent pricing</strong> and zero hassle.
          </p>
          
          <div className="hero-actions">
            <a href="tel:8435550199" className="btn btn-primary btn-lg">
              <i className="fa-solid fa-phone"></i> Call (843) 555-0199
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              <i className="fa-solid fa-file-invoice-dollar"></i> Get Free Estimate
            </a>
          </div>

          {/* $1,000+ Style Trust Badge Grid */}
          <div className="hero-trust-grid">
            <div className="trust-badge-card">
              <div className="badge-icon-box">
                <i className="fa-solid fa-star text-gold"></i>
              </div>
              <div className="badge-text">
                <span className="badge-title">5.0 Google Rating</span>
                <span className="badge-sub">Top Local Score</span>
              </div>
            </div>
            
            <div className="trust-badge-card">
              <div className="badge-icon-box">
                <i className="fa-solid fa-comments"></i>
              </div>
              <div className="badge-text">
                <span className="badge-title">21+ Reviews</span>
                <span className="badge-sub">Verified Neighbors</span>
              </div>
            </div>

            <div className="trust-badge-card">
              <div className="badge-icon-box">
                <i className="fa-solid fa-house-circle-check"></i>
              </div>
              <div className="badge-text">
                <span className="badge-title">Locally Owned</span>
                <span className="badge-sub">Lowcountry SC Roots</span>
              </div>
            </div>

            <div className="trust-badge-card">
              <div className="badge-icon-box">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div className="badge-text">
                <span className="badge-title">Free Estimates</span>
                <span className="badge-sub">No Risk or Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
