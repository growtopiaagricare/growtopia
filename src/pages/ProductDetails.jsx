// src/pages/ProductDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 3;

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  if (!product) {
    return (
      <div className="pd-error-container">
        <h2>Product Not Found</h2>
        <Link to="/products" className="pd-back-btn">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      style: { borderRadius: '8px', background: '#333', color: '#fff' }
    });
  };

  return (
    <div className="pd-container">
      <Toaster reverseOrder={true} />

      {/* Breadcrumb - Helpful for Mobile Navigation */}
      <nav className="pd-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
      </nav>

      <div className="pd-main-grid">
        {/* Left Column: Image */}
        <div className="pd-image-section">
          <div className="pd-image-card">
            <img src={product.image} alt={product.name} />
            <span className="pd-category-tag">{product.category}</span>
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="pd-info-section">
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-price-row">
            <span className="pd-price">₹{product.price.toLocaleString()}</span>
            <span className="pd-stock-status">In Stock</span>
          </div>

          <p className="pd-description">{product.description}</p>

          <div className="pd-features-list">
            <h3>Key Features</h3>
            <ul>
              {product.features?.map((feature, index) => (
                <li key={index}>
                  <span className="pd-check">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pd-actions">
            <button onClick={handleAddToCart} className="pd-add-to-cart">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .pd-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
        }

        .pd-breadcrumb {
          font-size: 0.85rem;
          margin-bottom: 2rem;
          color: #888;
        }

        .pd-breadcrumb a { color: #6b9e3e; text-decoration: none; }

        /* Grid Layout */
        .pd-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Image Styling */
        .pd-image-section { position: sticky; top: 20px; }
        .pd-image-card {
          background: white;
          padding: 1rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: relative;
        }
        .pd-image-card img {
          width: 100%;
          border-radius: 15px;
          display: block;
          object-fit: cover;
        }
        .pd-category-tag {
          position: absolute;
          top: 2rem;
          left: 2rem;
          background: #f4a220;
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Info Styling */
        .pd-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: #1a2f0d;
          margin-bottom: 1rem;
        }
        .pd-price-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .pd-price { font-size: 2.2rem; font-weight: 700; color: #f4a220; }
        .pd-stock-status { color: #6b9e3e; font-weight: 600; font-size: 0.9rem; }
        .pd-description { line-height: 1.8; color: #555; margin-bottom: 2.5rem; font-size: 1.1rem; }

        .pd-features-list h3 { font-size: 1.2rem; color: #1a2f0d; margin-bottom: 1rem; }
        .pd-features-list ul { list-style: none; }
        .pd-features-list li { margin-bottom: 0.8rem; color: #444; display: flex; align-items: center; gap: 0.8rem; }
        .pd-check { color: #6b9e3e; font-weight: bold; }

        .pd-actions { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #eee; }
        .pd-add-to-cart {
          width: 100%;
          padding: 1.2rem;
          background: #1a2f0d;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.3s;
        }
        .pd-add-to-cart:hover { background: #2d5016; transform: translateY(-3px); }

        /* --- MOBILE RESPONSIVE OVERRIDES --- */
        @media (max-width: 992px) {
          .pd-main-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .pd-image-section { position: static; }
          .pd-title { font-size: 2.2rem; }
        }

        @media (max-width: 480px) {
          .pd-container { padding: 1rem; }
          .pd-price { font-size: 1.8rem; }
          .pd-add-to-cart { font-size: 0.9rem; padding: 1rem; }
          .pd-category-tag { top: 1.5rem; left: 1.5rem; font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;