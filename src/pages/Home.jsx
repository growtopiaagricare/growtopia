// src/pages/Home.jsx - MOBILE RESPONSIVE
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Sprout, Target, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>🌱 Revolutionizing Agriculture</h1>
        <p style={styles.heroText}>
          GROWTOPIA is pioneering sustainable farming solutions with cutting-edge 
          technology to feed the future
        </p>
        <Link to="/products">
          <button style={styles.ctaButton}>Explore Products</button>
        </Link>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.missionText}>
            At GROWTOPIA, we're committed to transforming agriculture through innovative 
            technology and sustainable practices. Our team combines expertise in agritech, 
            IoT, and environmental science to create solutions that empower farmers and 
            promote food security worldwide.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Why Choose GROWTOPIA</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <Sprout size={48} color="#6b9e3e" style={styles.featureIcon} />
              <h3 style={styles.featureTitle}>Sustainable Solutions</h3>
              <p style={styles.featureText}>
                Eco-friendly products that protect the environment while boosting productivity
              </p>
            </div>
            <div style={styles.featureCard}>
              <Target size={48} color="#6b9e3e" style={styles.featureIcon} />
              <h3 style={styles.featureTitle}>Precision Technology</h3>
              <p style={styles.featureText}>
                IoT-powered tools for data-driven farming decisions
              </p>
            </div>
            <div style={styles.featureCard}>
              <Users size={48} color="#6b9e3e" style={styles.featureIcon} />
              <h3 style={styles.featureTitle}>Expert Support</h3>
              <p style={styles.featureText}>
                Dedicated team to help you succeed at every step
              </p>
            </div>
            <div style={styles.featureCard}>
              <TrendingUp size={48} color="#6b9e3e" style={styles.featureIcon} />
              <h3 style={styles.featureTitle}>Proven Results</h3>
              <p style={styles.featureText}>
                Increased yields and reduced costs for farmers nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Featured Products</h2>
          <div style={styles.productsGrid}>
            {featuredProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`} 
                style={styles.productCard}
              >
                <div style={styles.productImage}>{product.image}</div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                <p style={styles.productPrice}>₹{product.price.toLocaleString()}</p>
                <button style={styles.viewButton}>View Details</button>
              </Link>
            ))}
          </div>
          <div style={styles.viewAllContainer}>
            <Link to="/products">
              <button style={styles.viewAllButton}>View All Products</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Transform Your Farm?</h2>
        <p style={styles.ctaText}>
          Join thousands of farmers who are already using GROWTOPIA solutions
        </p>
        <Link to="/contact">
          <button style={styles.ctaButton}>Get Started Today</button>
        </Link>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    backgroundImage:  "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url('/img2.png')", 
    // background: 'linear-gradient(135deg, #2d5016 0%, #6b9e3e 100%)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "clamp(250px, 60vh, 400px)",
    color: 'white',
    padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
    textAlign: 'center'
    
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    marginBottom: '1rem',
    color: 'white',
    lineHeight: '1.2'
  },
  heroText: {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
    padding: '0 1rem'
  },
  ctaButton: {
    background: '#f4a220',
    color: 'white',
    padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
    border: 'none',
    borderRadius: '30px',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    width: 'auto',
    minWidth: '200px'
  },
  section: {
    padding: 'clamp(2rem, 5vw, 4rem) 1.5rem'
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2d5016',
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)'
  },
  missionText: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    lineHeight: '1.8',
    color: '#333'
  },
  featuresSection: {
    background: '#f8f9fa',
    padding: 'clamp(2rem, 5vw, 4rem) 1.5rem'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
    gap: 'clamp(1.5rem, 3vw, 2rem)',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featureCard: {
    background: 'white',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s'
  },
  featureIcon: {
    width: 'clamp(40px, 8vw, 48px)',
    height: 'clamp(40px, 8vw, 48px)'
  },
  featureTitle: {
    margin: '1rem 0',
    color: '#2d5016',
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)'
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: 'clamp(1.5rem, 3vw, 2rem)',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  productCard: {
    background: 'white',
    borderRadius: '15px',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    display: 'block'
  },
  productImage: {
    fontSize: 'clamp(3rem, 8vw, 4rem)',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  productName: {
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
    marginBottom: '0.5rem',
    color: '#2d5016'
  },
  productDescription: {
    color: '#666',
    marginBottom: '1rem',
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
    lineHeight: '1.5'
  },
  productPrice: {
    fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
    fontWeight: 'bold',
    color: '#f4a220',
    marginBottom: '1rem'
  },
  viewButton: {
    width: '100%',
    background: '#6b9e3e',
    color: 'white',
    padding: 'clamp(0.65rem, 2vw, 0.75rem)',
    border: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    fontWeight: '600',
    cursor: 'pointer'
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '3rem'
  },
  viewAllButton: {
    background: '#2d5016',
    color: 'white',
    padding: 'clamp(0.8rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)',
    border: 'none',
    borderRadius: '25px',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    minWidth: '200px'
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%)',
    color: 'white',
    padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
    textAlign: 'center'
  },
  ctaTitle: {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    marginBottom: '1rem',
    color: 'white'
  },
  ctaText: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    marginBottom: '2rem'
  }
};

export default Home;
