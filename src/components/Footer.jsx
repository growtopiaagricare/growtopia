// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <h3 style={styles.heading}>🌱 GROWTOPIA</h3>
            <p style={styles.text}>
              Revolutionizing agriculture through innovation and sustainable practices.
            </p>
          </div>

          <div>
            <h4 style={styles.subHeading}>Quick Links</h4>
            <ul style={styles.list}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/products" style={styles.link}>Products</Link></li>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/blog" style={styles.link}>Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={styles.subHeading}>Contact</h4>
            <p style={styles.text}>Email: info@growtopia.com</p>
            <p style={styles.text}>Phone: +91 98765 43210</p>
            <p style={styles.text}>Ahmedabad, Gujarat, India</p>
          </div>

          <div>
            <h4 style={styles.subHeading}>Follow Us</h4>
            <div style={styles.social}>
              <a href="#!" style={styles.socialLink}>Facebook</a>
              <a href="#!" style={styles.socialLink}>Twitter</a>
              <a href="#!" style={styles.socialLink}>LinkedIn</a>
              <a href="#!" style={styles.socialLink}>Instagram</a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p>© 2025 GROWTOPIA. All rights reserved.</p>
          <p>Made with 💚 by GROWTOPIA Team</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#2d5016',
    color: 'white',
    padding: '3rem 2rem 1rem',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#f4a220',  
  fontWeight: '650'
  },
  subHeading: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#f4a220'
  },
  text: {
    marginBottom: '0.5rem',
    lineHeight: '1.6'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.3s'
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  socialLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '1rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem'
  }
};

export default Footer;