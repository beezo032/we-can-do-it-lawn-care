import React from 'react';

export default function CallToAction() {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-overlay"></div>
      <div className="container cta-banner-container">
        <div className="cta-banner-content">
          <h2>Get a Pristine Yard Without the Stress</h2>
          <p>
            Join hundreds of satisfied homeowners and businesses in Summerville, SC who trust 
            <strong> We Can Do It! Lawn & Landscape LLC</strong>. No contracts, zero hassle, and 100% reliable scheduling.
          </p>
          
          <div className="cta-banner-actions">
            <a href="tel:8435550199" className="btn btn-primary btn-lg cta-phone-btn">
              <i className="fa-solid fa-phone"></i> Call Now: (843) 555-0199
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Get Your Free Estimate
            </a>
          </div>

          <div className="cta-banner-checklist">
            <span className="checklist-item"><i className="fa-solid fa-circle-check"></i> No-Obligation Quotes</span>
            <span className="checklist-item"><i className="fa-solid fa-circle-check"></i> Licensed & Insured Crew</span>
            <span className="checklist-item"><i className="fa-solid fa-circle-check"></i> 100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
