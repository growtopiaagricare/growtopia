// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products, categories } from "../data/products";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const Products = ({ onAddToCart }) => {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 3;
  const navigate = useNavigate();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      position: "top-center",
      style: { background: "#fff", color: "#000000" },
    });
  };

  return (
    <div className="gt-container">
      <Toaster reverseOrder={true} />

      {/* Editorial Hero Section */}
      <section className="gt-editorial-header">
        <div className="gt-hero-overlay" />
        <div className="gt-hero-content">
          <div className="gt-label-box">OUR SOLUTIONS</div>
          <h1 className="gt-main-headline">
            GROW SMARTER,<br />
            <span className="gt-headline-italic">LIVE GREENER</span>
          </h1>
          <p className="gt-header-quote">
            From sun-soaked balconies to thriving terrace gardens — explore tools
            and solutions crafted for every urban green space, home, nursery, and institution.
          </p>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="gt-filter-section">
        <div className="gt-filter-container">
          <div className="gt-filter-header">
            <div className="gt-section-label">— EXPLORE BY CATEGORY</div>
          </div>
          <div className="gt-category-grid">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`gt-category-card${selectedCategory === category ? " gt-category-card--active" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gt-category-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="gt-category-name">{category}</div>
                <div className="gt-category-corner" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="gt-products-section">
        <div className="gt-products-section-header">
          <div className="gt-products-label-container">
            <div className="gt-products-label">
              {selectedCategory === "All"
                ? "ALL PRODUCTS"
                : selectedCategory.toUpperCase()}
            </div>
            <div className="gt-products-label-line" />
          </div>
          <div className="gt-products-count">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "Product" : "Products"}
          </div>
        </div>

        <div className="gt-products-grid">
          {filteredProducts.map((product) => (

            <div key={product.id} className="gt-product-card">


              <div 
                className="gt-product-link" 
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="gt-product-image"
                />
                <span className="gt-category-badge">{product.category}</span>
                <h3 className="gt-product-name">{product.name}</h3>
                <p className="gt-product-description">{product.description}</p>
                <p className="gt-product-price">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>


              <div className="gt-button-group">
                <button 
                onClick={() => navigate(`/product/${product.id}`)} 
                className="gt-details-button">
                  View Details
                </button>
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="gt-cart-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="gt-no-products">
            <div className="gt-no-products-icon">∅</div>
            <p className="gt-no-products-text">No products found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="gt-reset-button"
            >
              View All Products
            </button>
          </div>
        )}
      </section>

      {/* Decorative Footer Element */}
      <section className="gt-footer-decor">
        <div className="gt-footer-pattern" />
        <div className="gt-footer-text">GROWTOPIA — Premium Urban Garden Solutions</div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Base / Desktop ─────────────────────────────── */

        .gt-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* Hero — full-bleed image layout matching Home page style */
        .gt-editorial-header {
          background-color: #1a2f0d;
          background-image: linear-gradient(to bottom, rgba(26,47,13,0.45), rgba(26,47,13,0.65)), url('/productNav.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }
        .gt-hero-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .gt-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          width: 100%;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gt-label-box {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid #f4a220;
          font-size: 0.7rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #f4a220;
          background: rgba(244, 162, 32, 0.05);
        }
        .gt-main-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: clamp(-0.5px, -0.04em, -2px);
          color: white;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          word-break: break-word;
        }
        .gt-headline-italic { font-style: italic; font-weight: 400; color: #8fbc5e; }
        .gt-headline-accent { color: #f4a220; }
        .gt-header-quote {
          font-size: clamp(0.875rem, 2vw, 1.1rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.92);
          font-style: italic;
          font-weight: 300;
          max-width: 560px;
        }

        /* Filter */
        .gt-filter-section { padding: 6rem 3rem; background: white; }
        .gt-filter-container { max-width: 1400px; margin: 0 auto; }
        .gt-filter-header { margin-bottom: 3rem; }
        .gt-section-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .gt-category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .gt-category-card {
          background: white;
          border: 3px solid #1a2f0d;
          padding: 2rem 1.5rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: slideUp 0.6s ease-out both;
        }
        .gt-category-card:hover { background: #f0f7e8; }
        .gt-category-card--active { background: #1a2f0d; color: white; }
        .gt-category-card--active:hover { background: #1a2f0d; }
        .gt-category-number {
          font-size: 2.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          opacity: 0.15;
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          line-height: 1;
        }
        .gt-category-name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
          z-index: 1;
        }
        .gt-category-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 40px; height: 40px;
          background: #f4a220;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          transition: all 0.3s ease;
        }

        /* Products */
        .gt-products-section { padding: 4rem 3rem; background: white; }
        .gt-products-section-header {
          max-width: 1400px;
          margin: 0 auto 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .gt-products-label-container { display: flex; align-items: center; gap: 1.5rem; }
        .gt-products-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .gt-products-label-line { width: 80px; height: 2px; background: #f4a220; }
        .gt-products-count { font-size: 1rem; color: #666; font-weight: 600; }

        .gt-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .gt-product-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }
        .gt-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        .gt-product-link {
          text-decoration: none;
          color: inherit;
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .gt-product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 1rem;
          border-radius: 10px;
        }
        .gt-category-badge {
          display: inline-flex;
          align-self: flex-start;
          width: fit-content;
          background: #e8f5e9;
          color: #2d5016;
          padding: 0.3rem 1rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .gt-product-name {
          font-size: 1.3rem;
          color: #2d5016;
          margin-bottom: 0.5rem;
        }
        .gt-product-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .gt-product-price {
          font-size: 1.8rem;
          font-weight: bold;
          color: #f4a220;
          margin-top: auto;
        }
        .gt-button-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0 1.5rem 1.5rem;
        }
        .gt-details-button {
          padding: 0.75rem;
          background: #6b9e3e;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gt-details-button:hover { background: #4e7a2c; }
        .gt-cart-button {
          padding: 0.75rem;
          background: #f4a220;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .gt-cart-button:hover { background: #d4891a; }

        /* No products */
        .gt-no-products { text-align: center; padding: 5rem 2rem; max-width: 600px; margin: 0 auto; }
        .gt-no-products-icon { font-size: 5rem; color: #f4a220; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; }
        .gt-no-products-text { font-size: 1.3rem; color: #666; margin-bottom: 2rem; font-style: italic; }
        .gt-reset-button {
          padding: 1rem 2.5rem;
          background: #1a2f0d;
          color: white;
          border: none;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        .gt-reset-button:hover { background: #2e5a1a; }

        /* Footer */
        .gt-footer-decor {
          padding: 4rem 3rem;
          background: #1a2f0d;
          position: relative;
          overflow: hidden;
        }
        .gt-footer-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background: repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px);
        }
        .gt-footer-text {
          text-align: center;
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          color: #f4a220;
          position: relative;
          letter-spacing: 2px;
        }

        /* Animations */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .gt-category-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 1rem;
          }
          .gt-products-section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 2.5rem;
          }
          .gt-products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          .gt-editorial-header { padding: 3rem 1.5rem; min-height: 48vh; }
          .gt-main-headline { font-size: clamp(1.8rem, 8vw, 3rem); letter-spacing: -0.5px; }
          .gt-header-quote { font-size: clamp(0.8rem, 3vw, 1rem); }

          .gt-filter-section { padding: 3rem 1.5rem; }
          .gt-filter-header { margin-bottom: 1.75rem; }
          .gt-category-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .gt-category-card { min-height: 90px; padding: 1.25rem 1rem; }
          .gt-category-number { font-size: 1.8rem; }
          .gt-category-name { font-size: 0.8rem; }

          .gt-products-section { padding: 3rem 1.5rem; }
          .gt-products-section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }
          .gt-products-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .gt-product-image { height: 180px; }
          .gt-product-name { font-size: 1.1rem; }
          .gt-product-price { font-size: 1.5rem; }

          .gt-footer-decor { padding: 2.5rem 1.5rem; }
          .gt-footer-text { font-size: 1rem; letter-spacing: 1px; }

          .gt-no-products { padding: 3rem 1rem; }
          .gt-no-products-icon { font-size: 3.5rem; }
          .gt-no-products-text { font-size: 1.1rem; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .gt-editorial-header { padding: 2rem 1.25rem; min-height: 42vh; }
          .gt-main-headline { font-size: clamp(1.6rem, 8vw, 2.4rem); }
          .gt-header-quote { font-size: 0.82rem; }
          .gt-category-grid { grid-template-columns: repeat(2, 1fr); }
          .gt-button-group { grid-template-columns: 1fr 1fr; }
          .gt-details-button, .gt-cart-button { font-size: 0.85rem; }
        }

        /* ── Extra-small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .gt-main-headline { font-size: 7.5vw; letter-spacing: 0; }
          .gt-category-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Products;