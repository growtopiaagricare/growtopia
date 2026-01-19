// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Get in Touch</h1>
        <p style={styles.heroSubtitle}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.contactLayout}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h2 style={styles.infoTitle}>Contact Information</h2>
            <p style={styles.infoText}>
              Have questions about our products or services? Reach out to us!
            </p>

            <div style={styles.contactDetails}>
              <div style={styles.detailItem}>
                <div style={styles.iconCircle}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={styles.detailTitle}>Email Us</h3>
                  <a href="mailto:info@growtopia.com" style={styles.detailLink}>
                    info@growtopia.com
                  </a>
                  <br />
                  <a href="mailto:support@growtopia.com" style={styles.detailLink}>
                    support@growtopia.com
                  </a>
                </div>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.iconCircle}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={styles.detailTitle}>Call Us</h3>
                  <a href="tel:+919876543210" style={styles.detailLink}>
                    +91 98765 43210
                  </a>
                  <br />
                  <span style={styles.detailText}>Mon-Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div style={styles.detailItem}>
                <div style={styles.iconCircle}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={styles.detailTitle}>Visit Us</h3>
                  <p style={styles.detailText}>
                    GROWTOPIA Headquarters<br />
                    Science City Road<br />
                    Ahmedabad, Gujarat 380060<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.mapPlaceholder}>
              <MapPin size={48} color="#6b9e3e" />
              <p>Map Placeholder</p>
              <small>Ahmedabad, Gujarat, India</small>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Send us a Message</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="your@email.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="What is this regarding?"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                />
              </div>

              <button type="submit" style={styles.submitBtn}>
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    width: '100%',
    overflowX:'hidden',
  },
  hero: {
    background: 'linear-gradient(135deg, #2d5016 0%, #6b9e3e 100%)',
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: 'white'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto'
  },
  contactSection: {
    padding: '4rem 2rem'
  },
  contactLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  infoTitle: {
    fontSize: '2rem',
    color: '#2d5016',
    marginBottom: '0.5rem'
  },
  infoText: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  detailItem: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start'
  },
  iconCircle: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #6b9e3e, #2d5016)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0
  },
  detailTitle: {
    fontSize: '1.3rem',
    color: '#2d5016',
    marginBottom: '0.5rem'
  },
  detailLink: {
    color: '#6b9e3e',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600'
  },
  detailText: {
    color: '#666',
    lineHeight: '1.6'
  },
  mapPlaceholder: {
    background: '#f8f9fa',
    borderRadius: '15px',
    padding: '3rem',
    textAlign: 'center',
    border: '2px dashed #ccc'
  },
  formContainer: {
    background: 'white',
    borderRadius: '15px',
    padding: '2.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  formTitle: {
    fontSize: '2rem',
    color: '#2d5016',
    marginBottom: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
    gap: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333'
  },
  input: {
    padding: '0.75rem 1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    width:'100%',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  textarea: {
    padding: '0.75rem 1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  submitBtn: {
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    transition: 'background 0.3s',
    width: '100%',
  }
};

export default Contact;