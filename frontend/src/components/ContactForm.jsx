import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    service: false,
    address: false
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Lawn Mowing',
    'Lawn Maintenance',
    'Grass Seeding',
    'Landscape Design',
    'Mulch & Pine Straw',
    'Weed Control',
    'General Yard Work',
    'Seasonal Cleanup',
    'Other / Multiple Services'
  ];

  // Real-time validations
  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    
    // Validate phone: must contain at least 10 digits
    const digits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (digits.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Property address is required';
    }
    
    return errors;
  };

  const errors = validate();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to trigger visual validation
    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true,
      address: true
    });

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) {
      setStatus('error');
      setErrorMessage('Please correct the validation errors in the form before submitting.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          address: '',
          message: ''
        });
        setTouched({
          name: false,
          phone: false,
          email: false,
          service: false,
          address: false
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error('Quote submission error:', err);
      setStatus('error');
      setErrorMessage('Could not connect to the quote server. Please check if backend is running or call us directly at (843) 555-0199.');
    }
  };

  // Helper to determine CSS classes for fields
  const getFieldClass = (field) => {
    if (!touched[field]) return '';
    return errors[field] ? 'is-invalid' : 'is-valid';
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        
        {/* Left side details */}
        <div className="contact-info-panel">
          <span className="badge section-badge">Get Started</span>
          <h2>Ready for a Free Lawn Care Estimate?</h2>
          <p className="contact-intro">
            Fill out our quick form and our Summerville estimation team will review your property details. Most quotes are sent back via email or phone within 24 hours.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-detail-text">
                <span>Call or Text Us</span>
                <a href="tel:8435550199"><strong>(843) 555-0199</strong></a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-detail-text">
                <span>Email Us</span>
                <a href="mailto:info@wecandoitlawn.com"><strong>info@wecandoitlawn.com</strong></a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="contact-detail-text">
                <span>Office Hours</span>
                <strong>Mon - Fri: 8:00 AM - 6:00 PM</strong>
                <strong>Sat: 9:00 AM - 3:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="contact-highlight-card">
            <i className="fa-solid fa-thumbs-up highlight-icon"></i>
            <p>
              <strong>No-Risk Guarantee:</strong> All estimates are 100% free and carry absolutely no obligation to book.
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-form-panel">
          {status === 'success' ? (
            <div className="form-success-state fade-in">
              <div className="success-icon-wrapper">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>Request Submitted Successfully!</h3>
              <p>
                Thank you for reaching out to <strong>We Can Do It! Lawn & Landscape LLC</strong>.
              </p>
              <p className="success-next">
                Our team is currently looking up your property details. We will contact you via email or phone within 24 business hours to provide your estimate.
              </p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form" noValidate>
              <h3>Get Your Free Quote</h3>
              <p className="form-sub">No credit card or commitment required.</p>
              
              {status === 'error' && (
                <div className="form-error-alert">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={getFieldClass('name')}
                    placeholder="John Doe"
                    required
                  />
                  {touched.name && errors.name && <span className="input-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    className={getFieldClass('phone')}
                    placeholder="(843) 555-0123"
                    required
                  />
                  {touched.phone && errors.phone && <span className="input-error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={getFieldClass('email')}
                  placeholder="john@example.com"
                  required
                />
                {touched.email && errors.email && <span className="input-error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={() => handleBlur('service')}
                  className={getFieldClass('service')}
                  required
                >
                  <option value="" disabled>Select a service...</option>
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
                {touched.service && errors.service && <span className="input-error-msg">{errors.service}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Property Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={() => handleBlur('address')}
                  className={getFieldClass('address')}
                  placeholder="123 Main St, Summerville, SC 29483"
                  required
                />
                {touched.address && errors.address && <span className="input-error-msg">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Details (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your yard (e.g. corner lot, fenced backyard, pet owner, preferred schedule)..."
                  rows="4"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-secondary btn-block"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin"></i> Sending Request...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Free Quote Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
}
