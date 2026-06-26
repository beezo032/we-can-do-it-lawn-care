import React from 'react';

const SERVICES_DATA = [
  {
    id: 'lawn-mowing',
    title: 'Lawn Mowing',
    icon: 'fa-scissors',
    description: 'Weekly or bi-weekly mowing, precise string trimming (weed eating), hard edging along driveways/walkways, and clean blow-off of all hard surfaces.'
  },
  {
    id: 'lawn-maintenance',
    title: 'Lawn Maintenance',
    icon: 'fa-compass-drafting',
    description: ' aeration, fertilization treatments, and general health monitoring to ensure your lawn stays green and disease-resistant all year long.'
  },
  {
    id: 'grass-seeding',
    title: 'Grass Seeding',
    icon: 'fa-seedling',
    description: 'Professional overseeding, aeration + seeding packages, and bare spot repair using high-quality local warm-season turf seed suited for South Carolina soils.'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    icon: 'fa-trowel-bricks',
    description: 'Transform your outdoor space with custom flowerbed designs, shrub installation, sod laying, and hardscape borders that elevate your home curb appeal.'
  },
  {
    id: 'mulching',
    title: 'Mulch & Pine Straw',
    icon: 'fa-bucket',
    description: 'Fresh delivery and precise installation of double-shredded hardwood mulch, pine straw, or decorative stone to retain moisture and suppress weeds.'
  },
  {
    id: 'weed-control',
    title: 'Weed Control',
    icon: 'fa-spray-can-sparkles',
    description: 'Targeted pre-emergent and post-emergent applications in both lawns and flowerbeds to eliminate crabgrass, dandelions, and clover without harming turf.'
  },
  {
    id: 'yard-work',
    title: 'General Yard Work',
    icon: 'fa-hands-holding-child',
    description: 'Shrub and hedge trimming, small tree pruning, vine removal, flower planting, and custom chore packages to keep your property looking manicured.'
  },
  {
    id: 'seasonal-cleanup',
    title: 'Seasonal Cleanup',
    icon: 'fa-wind',
    description: 'Spring spruce-up and Fall leaf removal. We clear leaves, clean gutters, bag debris, and prune perennials to prep your yard for changing seasons.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section bg-light">
      <div className="container">
        <span className="badge section-badge">What We Do</span>
        <h2>Our Professional Lawn & Landscaping Services</h2>
        <p className="section-lead">
          We offer comprehensive commercial and residential services tailored to Southern climates. 
          No job is too big or too small for our professional crew.
        </p>

        <div className="grid grid-4 services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className={`service-card ${service.imageUrl ? 'has-image' : ''}`}>
              {service.imageUrl && (
                <div className="service-card-img-wrapper">
                  <img src={service.imageUrl} alt={service.altText} loading="lazy" />
                </div>
              )}
              <div className="service-card-body">
                <div className="service-icon-box">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-card-link">
                  Request Service <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
