import React, { useState } from 'react';

const GALLERY_IMAGES = [
  {
    id: 1,
    category: 'mowing',
    title: 'Precision Striped Lawn',
    location: 'Summerville, SC',
    url: '/striped-lawn.jpg',
    description: 'Manicured turf with clean lines. Ask about our eco-friendly mowing heights that protect local pollinators.'
  },
  {
    id: 2,
    category: 'landscaping',
    title: 'Custom Stone & Mulch Bed',
    location: 'Sangaree, SC',
    url: '/stone-mulch-bed.jpg',
    description: 'Fresh double-shredded hardwood mulch and decorative borders designed to lock in moisture.'
  },
  {
    id: 3,
    category: 'cleanup',
    title: 'Hedge Trimming & Spruce Up',
    location: 'Ladson, SC',
    url: '/hedge-trimming.jpg',
    description: 'Manicured hedges and bush shaping to return clean borders to overgrown properties.'
  },
  {
    id: 4,
    category: 'landscaping',
    title: 'Sod Installation & Bordering',
    location: 'Goose Creek, SC',
    url: '/sod-installation.jpg',
    description: 'Laying local St. Augustine sod rolls to instantly establish a lush lawn.'
  },
  {
    id: 5,
    category: 'mowing',
    title: 'Commercial Turf Care',
    location: 'North Charleston, SC',
    url: '/commercial-turf.jpg',
    description: 'Commercial scale zero-turn mowing routines for massive lawns and fields.'
  },
  {
    id: 6,
    category: 'cleanup',
    title: 'Fall Leaf Removal & Lawn Prep',
    location: 'Summerville, SC',
    url: '/leaf-removal.jpg',
    description: 'Clearing heavy leaf coverage to prep turf and root systems for cold weather.'
  }
];

const BEFORE_AFTER_DATA = [
  {
    id: 1,
    title: 'Full Yard Overhaul & Cleanup',
    location: 'Nexton Subdivision, Summerville',
    desc: 'Removed heavy weed infestation, trimmed wild oak branches, edged walks, and applied seasonal treatment.',
    beforeUrl: '/full-yard-before.jpg',
    afterUrl: '/full-yard-after.jpg'
  },
  {
    id: 2,
    title: 'Premium Dark Brown Mulch Install',
    location: 'Cane Bay Plantation, Summerville',
    desc: 'Edged weedy beds, installed commercial weed barrier, and installed premium double-shredded mulch.',
    beforeUrl: '/mulch-install-before.jpg',
    afterUrl: '/mulch-install-after.jpg'
  },
  {
    id: 3,
    title: 'Sod laying & Turf Restoration',
    location: 'Sangaree, SC',
    desc: 'Graded poor sandy soil, integrated nutrient amendments, and laid fresh local St. Augustine sod.',
    beforeUrl: '/sod-restoration-before.jpg',
    afterUrl: '/sod-restoration-after.jpg'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [viewBefore, setViewBefore] = useState({
    1: false,
    2: false,
    3: false
  });

  const toggleBefore = (id) => {
    setViewBefore(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="gallery-section bg-light">
      <div className="container">
        <span className="badge section-badge">Our Work</span>
        <h2>Recent Lawn & Landscaping Projects</h2>
        <p className="section-lead">
          We take pride in every yard we service. Check out some of our recent work in the local area.
        </p>

        {/* Filter buttons */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'mowing' ? 'active' : ''}`} 
            onClick={() => setFilter('mowing')}
          >
            Mowing & Edging
          </button>
          <button 
            className={`filter-btn ${filter === 'landscaping' ? 'active' : ''}`} 
            onClick={() => setFilter('landscaping')}
          >
            Landscaping
          </button>
          <button 
            className={`filter-btn ${filter === 'cleanup' ? 'active' : ''}`} 
            onClick={() => setFilter('cleanup')}
          >
            Cleanups & Trimming
          </button>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid">
          {filteredImages.map((img) => {
            const isActive = activeOverlay === img.id;
            return (
              <div 
                key={img.id} 
                className={`gallery-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveOverlay(isActive ? null : img.id)}
              >
                <div className="gallery-image-wrapper">
                  <img src={img.url} alt={img.title} loading="lazy" />
                  
                  {img.title === 'Precision Striped Lawn' && (
                    <div className="eco-badge-floating">
                      <i className="fa-solid fa-leaf"></i> Eco-Friendly Mowing
                    </div>
                  )}
                  
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <span className="overlay-location"><i className="fa-solid fa-location-dot"></i> {img.location}</span>
                      <h4>{img.title}</h4>
                      <p className="overlay-desc">{img.description}</p>
                      <span className="overlay-category">{img.category}</span>
                      
                      {img.title === 'Precision Striped Lawn' && (
                        <a 
                          href="https://xerces.org/blog/day-without-invertebrates" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="eco-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-bug"></i> Lawn Biodiversity Note
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Before/After Section */}
        <div className="before-after-divider">
          <span className="badge section-badge">Visual Transformations</span>
          <h3>Before & After Results</h3>
          <p className="section-lead">
            Hover or tap to toggle between our starting and finished landscaping projects. Real results, real homeowners.
          </p>

          <div className="before-after-grid">
            {BEFORE_AFTER_DATA.map((proj) => {
              const showBefore = viewBefore[proj.id];
              return (
                <div key={proj.id} className="ba-card">
                  <div className="ba-image-container">
                    <img 
                      src={showBefore ? proj.beforeUrl : proj.afterUrl} 
                      alt={proj.title}
                      className="ba-image fade-in-fast"
                    />
                    
                    {/* Status Badge */}
                    <span className={`ba-status-badge ${showBefore ? 'before' : 'after'}`}>
                      {showBefore ? 'BEFORE - Needs Work' : 'AFTER - Completed'}
                    </span>
                    
                    {/* Floating Toggle Controls */}
                    <button 
                      className="ba-toggle-btn"
                      onClick={() => toggleBefore(proj.id)}
                      aria-label="Toggle before and after image"
                    >
                      <i className="fa-solid fa-right-left"></i> {showBefore ? 'Show Completed' : 'Show Before'}
                    </button>
                  </div>
                  
                  <div className="ba-content">
                    <span className="ba-location"><i className="fa-solid fa-location-dot"></i> {proj.location}</span>
                    <h4>{proj.title}</h4>
                    <p>{proj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
