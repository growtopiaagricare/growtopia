// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Sprout, Target, Users, TrendingUp } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    const img = new Image();
    img.src = "/HomeNav.webp";
  }, []);

  return (
    <div className="gh-container">
      {/* Editorial Hero Section */}
      <section className="gh-editorial-hero">
        <div className="gh-hero-bg" />
        <div className="gh-hero-overlay" />
        <div className="gh-hero-content">
          <h1 className="gh-hero-headline">
            REVOLUTIONIZING<br />
            <span className="gh-hero-italic">URBAN GARDENING</span>
          </h1>
          <p className="gh-hero-description">
            Pioneering sustainable green solutions for balconies, terraces, homes, and nurseries
          </p>
          <Link to="/products">
            <button className="gh-hero-button">EXPLORE PRODUCTS</button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="gh-mission-section">
        <div className="gh-mission-container">
          <div className="gh-mission-left">
            <div className="gh-mission-image-box">
              <div className="gh-mission-image-overlay">OUR MISSION</div>
            </div>
          </div>
          <div className="gh-mission-right">
            <div className="gh-section-label">— WHAT DRIVES US</div>
            <h2 className="gh-mission-title">
              Transforming Green Spaces<br />
              <span className="gh-mission-title-accent">Through Innovation</span>
            </h2>
            <p className="gh-mission-text">
              At GROWTOPIA, we're committed to transforming urban gardening through innovative
              technology and sustainable practices. Our team combines expertise in agritech,
              IoT, and environmental science to create solutions that empower households,
              balcony gardeners, nurseries, and institutions to grow smarter and greener.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gh-features-section">
        <div className="gh-features-header">
          <div className="gh-section-label">— WHY CHOOSE US</div>
          <h2 className="gh-features-title">What Makes Us Different</h2>
        </div>
        <div className="gh-features-grid">
          <div className="gh-feature-card gh-feature-card--dark">
            <div className="gh-feature-icon-container">
              <Sprout size={36} color="white" />
            </div>
            <h3 className="gh-feature-card-title">Sustainable Solutions</h3>
            <p className="gh-feature-card-text">
              Eco-friendly products that protect the environment while boosting your garden's productivity
            </p>
            <div className="gh-feature-corner" />
          </div>
          <div className="gh-feature-card gh-feature-card--green">
            <div className="gh-feature-icon-container">
              <Target size={36} color="white" />
            </div>
            <h3 className="gh-feature-card-title">Precision Technology</h3>
            <p className="gh-feature-card-text">
              IoT-powered tools for data-driven gardening decisions — from balconies to terrace gardens
            </p>
            <div className="gh-feature-corner" />
          </div>
          {/* ── CHANGED: amber → teal ── */}
          <div className="gh-feature-card gh-feature-card--teal">
            <div className="gh-feature-icon-container">
              <Users size={36} color="white" />
            </div>
            <h3 className="gh-feature-card-title">Expert Support</h3>
            <p className="gh-feature-card-text">
              Dedicated team to help urban gardeners, nurseries, and institutions succeed at every step
            </p>
            <div className="gh-feature-corner" />
          </div>
          <div className="gh-feature-card gh-feature-card--forest">
            <div className="gh-feature-icon-container">
              <TrendingUp size={36} color="white" />
            </div>
            <h3 className="gh-feature-card-title">Proven Results</h3>
            <p className="gh-feature-card-text">
              Healthier plants, reduced costs, and greener spaces for homes and communities nationwide
            </p>
            <div className="gh-feature-corner" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="gh-products-section">
        <div className="gh-products-header">
          <div className="gh-products-label-container">
            <div className="gh-products-label">FEATURED PRODUCTS</div>
            <div className="gh-products-label-line" />
          </div>
          <h2 className="gh-products-title">Our Solutions</h2>
        </div>

        <div className="gh-products-grid">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="gh-product-card">
              <div className="gh-product-image-wrapper">
                <img src={product.image} alt={product.name} className="gh-product-image" />
              </div>
              <div className="gh-product-content">
                <h3 className="gh-product-name">{product.name}</h3>
                <p className="gh-product-description">{product.description}</p>
                <div className="gh-product-footer">
                  <p className="gh-product-price">₹{product.price.toLocaleString()}</p>
                  <button className="gh-view-button">VIEW DETAILS</button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="gh-view-all-container">
          <Link to="/products">
            <button className="gh-view-all-button">VIEW ALL PRODUCTS</button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gh-cta-section">
        <div className="gh-cta-content">
          <h2 className="gh-cta-title">
            Ready to Transform <span className="gh-cta-title-accent">Your Green Space?</span>
          </h2>
          <p className="gh-cta-text">
            Join urban gardeners, households, nurseries, and institutions already growing smarter with GROWTOPIA
          </p>
          <Link to="/contact">
            <button className="gh-cta-button">GET STARTED TODAY</button>
          </Link>
        </div>
      </section>

      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }

        /* ── Base / Desktop ─────────────────────────────── */

        .gh-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* Hero */
        .gh-editorial-hero {
          position: relative;
          width: 100%;
          height: 65vh;
          min-height: 380px;
          max-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          overflow: hidden;
        }
        .gh-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/HomeNav.webp');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: blur(1.5px) brightness(0.88);
          transform: scale(1.03);
        }
        .gh-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 30, 8, 0.2) 0%,
            rgba(15, 30, 8, 0.38) 50%,
            rgba(15, 30, 8, 0.25) 100%
          );
        }
        .gh-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          width: 100%;
          padding: 0 1rem;
        }
        .gh-hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 5.5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: clamp(-0.5px, -0.04em, -2px);
          color: white;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          word-break: break-word;
        }
        .gh-hero-italic { font-style: italic; font-weight: 400; color: #8fbc5e; }
        .gh-hero-description {
          font-size: clamp(0.875rem, 3vw, 1.1rem);
          line-height: 1.65;
          color: rgba(255,255,255,0.95);
          margin-bottom: 2rem;
          font-weight: 300;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .gh-hero-button {
          background: #f4a220;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Work Sans', sans-serif;
        }
        .gh-hero-button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }

        /* Mission */
        .gh-mission-section { padding: 6rem 3rem; background: white; }
        .gh-mission-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 4rem;
          align-items: center;
        }
        .gh-mission-left { position: relative; }
        .gh-mission-image-box {
          height: 450px;
          background: linear-gradient(135deg, #2d5016, #6b9e3e);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 0 #f4a220;
        }
        .gh-mission-image-overlay {
          font-size: 2.2rem;
          font-family: 'Playfair Display', serif;
          color: white;
          font-weight: 700;
          transform: rotate(-90deg);
          white-space: nowrap;
        }
        .gh-section-label {
          font-size: 0.7rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: #f4a220;
          margin-bottom: 1.2rem;
        }
        .gh-mission-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a2f0d;
          margin-bottom: 1.5rem;
        }
        .gh-mission-title-accent { font-style: italic; font-weight: 400; color: #6b9e3e; }
        .gh-mission-text { font-size: 1rem; line-height: 1.7; color: #333; }

        /* Features */
        .gh-features-section { padding: 6rem 3rem; background: #fafaf8; }
        .gh-features-header { max-width: 1400px; margin: 0 auto 3.5rem; text-align: center; }
        .gh-features-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #1a2f0d;
        }
        .gh-features-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .gh-feature-card {
          color: white;
          padding: 2.5rem;
          position: relative;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .gh-feature-card--dark   { background: #1a2f0d; }
        .gh-feature-card--green  { background: #6b9e3e; }
        /* ── CHANGED: amber → teal ── */
        .gh-feature-card--teal   { background: #1a5f72; }
        .gh-feature-card--forest { background: #2d5016; }
        .gh-feature-icon-container {
          width: 64px;
          height: 64px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .gh-feature-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: white;
        }
        .gh-feature-card-text { font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.9); }
        .gh-feature-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 50px; height: 50px;
          background: rgba(255,255,255,0.2);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* Products */
        .gh-products-section { padding: 6rem 3rem; background: white; }
        .gh-products-header { max-width: 1400px; margin: 0 auto 4rem; text-align: center; }
        .gh-products-label-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.2rem;
        }
        .gh-products-label { font-size: 0.7rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .gh-products-label-line { width: 60px; height: 2px; background: #f4a220; }
        .gh-products-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #1a2f0d;
        }
        .gh-products-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .gh-product-card {
          background: white;
          border: 0.1rem solid #000000a1;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
          color: inherit;
        }
        .gh-product-card:hover { transform: translateY(-4px); }
        .gh-product-image-wrapper { width: 100%; height: 220px; overflow: hidden; background: #f0f0f0; }
        .gh-product-image { width: 100%; height: 100%; object-fit: cover; }
        .gh-product-content { padding: 1.8rem; display: flex; flex-direction: column; flex: 1; }
        .gh-product-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a2f0d;
          margin-bottom: 0.8rem;
        }
        .gh-product-description { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 1.2rem; flex: 1; }
        .gh-product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .gh-product-price {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #f4a220;
        }
        .gh-view-button {
          background: #6b9e3e;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.75rem 1.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Work Sans', sans-serif;
          white-space: nowrap;
        }
        .gh-view-button:hover { background: #4e7a2c; transform: translateY(-2px); }
        .gh-view-all-container { text-align: center; margin-top: 3.5rem; }
        .gh-view-all-button {
          background: #1a2f0d;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 1rem 2.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Work Sans', sans-serif;
        }
        .gh-view-all-button:hover { background: #2e5a1a; transform: translateY(-2px); }

        /* CTA */
        .gh-cta-section {
          background: linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%);
          padding: 4rem 3rem;
          text-align: center;
        }
        .gh-cta-content { max-width: 700px; margin: 0 auto; }
        .gh-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-bottom: 1rem;
        }
        .gh-cta-title-accent { font-style: italic; font-weight: 400; color: #f4a220; }
        .gh-cta-text { font-size: 1rem; color: rgba(255,255,255,0.9); margin-bottom: 1.8rem; font-weight: 300; }
        .gh-cta-button {
          background: #f4a220;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Work Sans', sans-serif;
        }
        .gh-cta-button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .gh-mission-container {
            grid-template-columns: 320px 1fr;
            gap: 3rem;
          }
          .gh-mission-image-box { height: 400px; }
          .gh-features-grid { grid-template-columns: 1fr 1fr; }
          .gh-products-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          .gh-editorial-hero { padding: 2.5rem 1.5rem; min-height: 300px; }
          .gh-hero-headline { font-size: clamp(1.1rem, 5.5vw, 2.2rem); letter-spacing: -0.5px; }
          .gh-hero-description { font-size: clamp(0.8rem, 3vw, 1rem); }

          .gh-mission-section { padding: 4rem 1.5rem; }
          .gh-mission-container { grid-template-columns: 1fr; gap: 2.5rem; }
          .gh-mission-image-box { height: 300px; box-shadow: 15px 15px 0 #f4a220; }
          .gh-mission-title { text-align: center; }
          .gh-mission-right { text-align: center; }
          .gh-section-label { text-align: center; }

          .gh-features-section { padding: 4rem 1.5rem; }
          .gh-features-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .gh-feature-card { min-height: 180px; }

          .gh-products-section { padding: 4rem 1.5rem; }
          .gh-products-grid { grid-template-columns: 1fr; }
          .gh-product-footer { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .gh-view-button { width: 100%; text-align: center; }

          .gh-cta-section { padding: 3rem 1.5rem; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .gh-editorial-hero { padding: 2rem 1.25rem; min-height: 260px; }
          .gh-hero-headline { font-size: clamp(1rem, 5.5vw, 1.7rem); letter-spacing: 0; line-height: 1.2; }
          .gh-hero-description { font-size: 0.82rem; margin-bottom: 1.5rem; }
          .gh-hero-button { padding: 0.8rem 2rem; font-size: 0.72rem; }

          .gh-mission-section { padding: 3rem 1.25rem; }
          .gh-mission-image-box { height: 220px; box-shadow: 10px 10px 0 #f4a220; }
          .gh-mission-image-overlay { font-size: 1.6rem; transform: rotate(0deg); }

          .gh-features-section { padding: 3rem 1.25rem; }
          .gh-feature-card { padding: 1.75rem; }
          .gh-feature-icon-container { width: 52px; height: 52px; margin-bottom: 1rem; }
          .gh-feature-card-title { font-size: 1.2rem; }

          .gh-products-section { padding: 3rem 1.25rem; }
          .gh-products-header { margin-bottom: 2.5rem; }
          .gh-product-image-wrapper { height: 180px; }

          .gh-cta-section { padding: 2.5rem 1.25rem; }
        }

        /* ── Extra-small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .gh-hero-headline { font-size: 5vw; letter-spacing: 0; }
          .gh-hero-description { font-size: 0.78rem; }
          .gh-hero-button,
          .gh-view-all-button,
          .gh-cta-button { padding: 0.85rem 1.75rem; font-size: 0.75rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;