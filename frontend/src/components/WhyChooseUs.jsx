import React from 'react';

const TRUST_POINTS = [
  {
    icon: 'fa-house-chimney-window',
    title: '100% Local Summerville Crew',
    desc: 'We live and work right here in Summerville. We understand South Carolina grass types (Centipede, St. Augustine, Bermuda, Zoysia) and how to keep them healthy.'
  },
  {
    icon: 'fa-clock',
    title: 'Reliable & On-Time',
    desc: 'Tired of lawn services that don\'t show up? We stick to our schedules, send reminder notifications, and respect your time and property.'
  },
  {
    icon: 'fa-star',
    title: '5-Star Rated Customer Care',
    desc: 'Our commitment to quality service has earned us a spotless local reputation. We treat every yard like it\'s our own.'
  },
  {
    icon: 'fa-file-invoice-dollar',
    title: 'Fast, Free & Clear Quotes',
    desc: 'No hidden fees or surprises. We send free, detailed, and transparent quote estimates online or via phone within 24 hours.'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Fully Licensed & Insured',
    desc: 'We carry full general liability and workers\' compensation insurance for your absolute peace of mind while we are on your property.'
  },
  {
    icon: 'fa-certificate',
    title: 'Professional Grade Equipment',
    desc: 'We use sharp, commercial-grade mowers and tools to make clean cuts, preventing lawn diseases and ensuring a pristine look.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="container">
        <div className="why-header">
          <span className="badge section-badge">Why Choose Us</span>
          <h2>The Summerville Lawn Care Team You Can Trust</h2>
          <p className="section-lead">
            We are dedicated to providing consistent, hassle-free service that makes your property shine.
          </p>
        </div>

        <div className="why-grid-layout">
          {/* Left panel: Trust summary card */}
          <div className="why-summary-card">
            <div className="google-badge">
              <i className="fa-brands fa-google google-icon"></i>
              <div className="google-rating">
                <span className="rating-score">5.0</span>
                <div className="rating-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="reviews-count">Top Rated on Google Maps</span>
              </div>
            </div>
            <h3>We Make Lawn Care Simple</h3>
            <p>
              From easy online scheduling to automated monthly billing, we design our service around your convenience. No contract required for regular maintenance plans.
            </p>
            <div className="why-bullets">
              <div className="bullet"><i className="fa-solid fa-check"></i> No contracts required</div>
              <div className="bullet"><i className="fa-solid fa-check"></i> Easy online invoice payments</div>
              <div className="bullet"><i className="fa-solid fa-check"></i> Instant text notifications</div>
            </div>
            <a href="#contact" className="btn btn-secondary btn-block">
              Request Your Free Estimate
            </a>
          </div>

          {/* Right panel: Trust point grid */}
          <div className="why-points-grid">
            {TRUST_POINTS.map((point, index) => (
              <div key={index} className="why-point-card">
                <div className="point-icon-wrapper">
                  <i className={`fa-solid ${point.icon}`}></i>
                </div>
                <div className="point-content">
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
