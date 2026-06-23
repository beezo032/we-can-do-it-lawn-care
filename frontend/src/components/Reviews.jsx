import React from 'react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Summerville, SC',
    rating: 5,
    date: 'Last Week',
    initials: 'SM',
    text: 'We Can Do It! has been doing our lawn mowing and edging for over a year now. They are incredibly reliable and professional. Our yard always looks spotless, and they blow all the grass off the driveway and patio. Highly recommend!'
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Ladson, SC',
    rating: 5,
    date: '2 weeks ago',
    initials: 'JT',
    text: 'I hired them to install fresh pine straw and clean up overgrown flower beds. They did an amazing job, worked super fast, and gave me a very fair quote. The crew was extremely friendly and professional. I will definitely use them again!'
  },
  {
    id: 3,
    name: 'Rebecca D.',
    location: 'Goose Creek, SC',
    rating: 5,
    date: '1 month ago',
    initials: 'RD',
    text: 'It is so hard to find a yard crew that actually shows up when they say they will. These guys are always on time, send a text before arrival, and billing is totally automated online. The lawn looks gorgeous every single week!'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <span className="badge section-badge">Testimonials</span>
        <h2>What Our Summerville Neighbors Say</h2>
        <p className="section-lead">
          We pride ourselves on 5-star service. Read reviews from real local homeowners.
        </p>

        <div className="grid grid-3 reviews-grid">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star star-icon"></i>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-author">
                <div className="author-avatar">{review.initials}</div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <div className="author-meta">
                    <span className="author-location">{review.location}</span>
                    <span className="meta-dot">•</span>
                    <span className="verified-badge"><i className="fa-solid fa-circle-check"></i> Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <p>Ready to experience 5-star lawn care for yourself?</p>
          <a href="#contact" className="btn btn-primary">
            <i className="fa-solid fa-file-signature"></i> Get Your Free Quote Now
          </a>
        </div>
      </div>
    </section>
  );
}
