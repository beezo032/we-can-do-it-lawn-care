import React from 'react';

const LOCATIONS = [
  { name: 'Summerville (Core Service)', zip: '29483, 29485, 29486' },
  { name: 'Sangaree', zip: '29486' },
  { name: 'Ladson', zip: '29456' },
  { name: 'Goose Creek', zip: '29445' },
  { name: 'North Charleston (Select Areas)', zip: '29406, 29418, 29420' },
  { name: 'Lincolnville', zip: '29485' }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="service-area-section bg-light">
      <div className="container">
        <div className="service-area-layout">
          {/* Left panel: text list of locations */}
          <div className="service-area-content">
            <span className="badge section-badge">Coverage Map</span>
            <h2>Our Service Area in the Lowcountry</h2>
            <p className="section-lead-left">
              Based right here in <strong>Summerville, SC</strong>, we service residential neighborhoods and commercial properties throughout Dorchester, Berkeley, and Charleston counties.
            </p>
            <p className="area-description">
              If you live in or near these areas, we can keep your yard looking pristine. We are familiar with all major subdivisions, including Cane Bay Plantation, Nexton, Knightsville, and Crowfield Plantation.
            </p>
            
            <div className="locations-grid">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="location-item">
                  <i className="fa-solid fa-map-pin location-icon"></i>
                  <div className="location-text">
                    <strong>{loc.name}</strong>
                    <span>ZIP: {loc.zip}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="area-callout">
              <i className="fa-solid fa-circle-question callout-icon"></i>
              <p>
                <strong>Don't see your neighborhood?</strong> We frequently expand our routes. Give us a call at <a href="tel:8435550199">(843) 555-0199</a> to see if we have a crew in your area!
              </p>
            </div>
          </div>

          {/* Right panel: custom CSS visual representation of map/radius */}
          <div className="map-visual-card">
            <div className="map-radar">
              <div className="radar-circle circle-1"></div>
              <div className="radar-circle circle-2"></div>
              <div className="radar-circle circle-3"></div>
              <div className="map-pin-center">
                <i className="fa-solid fa-house-chimney logo-pin"></i>
                <span className="pulse"></span>
              </div>
              
              {/* Outer pins representing surrounding areas */}
              <div className="map-pin-outer p1" title="Sangaree">
                <span className="pin-lbl">Sangaree</span>
              </div>
              <div className="map-pin-outer p2" title="Ladson">
                <span className="pin-lbl">Ladson</span>
              </div>
              <div className="map-pin-outer p3" title="Goose Creek">
                <span className="pin-lbl">Goose Creek</span>
              </div>
              <div className="map-pin-outer p4" title="North Charleston">
                <span className="pin-lbl">N. Charleston</span>
              </div>
            </div>
            
            <div className="map-footer">
              <div className="map-footer-stat">
                <span className="stat-num">25+</span>
                <span className="stat-label">Mile Radius</span>
              </div>
              <div className="map-footer-stat">
                <span className="stat-num">Daily</span>
                <span className="stat-label">Crew Routes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
