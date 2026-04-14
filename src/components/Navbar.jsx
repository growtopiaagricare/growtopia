// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Helper to determine if a path is active
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="gn-nav">
        <div className="gn-container">
          {/* Logo */}
          <Link to="/" className="gn-logo">
            <img
              src={process.env.PUBLIC_URL + "/growtopia_logo.webp"}
              alt="logo"
              className="gn-logo-img"
            />
            GROWTOPIA
          </Link>

          {/* Right section */}
          <div className="gn-right-section">
            {/* Desktop links */}
            <ul className="gn-nav-links-desktop">
              <li>
                <Link to="/" className={`gn-link ${isActive("/") ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className={`gn-link ${isActive("/product") ? "active" : ""}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className={`gn-link ${isActive("/about") ? "active" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`gn-link ${isActive("/blog") ? "active" : ""}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`gn-link ${isActive("/contact") ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Actions: cart + hamburger */}
            <div className="gn-nav-actions">
              <Link to="/cart" className="gn-cart-btn" aria-label="Cart">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="gn-cart-count">{cartCount}</span>
                )}
              </Link>

              <button
                className="gn-menu-btn"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="gn-overlay" onClick={toggleMenu}>
          <div className="gn-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="gn-close-btn" onClick={toggleMenu} aria-label="Close menu">
              <X size={24} />
            </button>
            <Link to="/" className={`gn-mobile-link ${isActive("/") ? "active" : ""}`} onClick={toggleMenu}>Home</Link>
            <Link to="/products" className={`gn-mobile-link ${isActive("/product") ? "active" : ""}`} onClick={toggleMenu}>Products</Link>
            <Link to="/about" className={`gn-mobile-link ${isActive("/about") ? "active" : ""}`} onClick={toggleMenu}>About</Link>
            <Link to="/blog" className={`gn-mobile-link ${isActive("/blog") ? "active" : ""}`} onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className={`gn-mobile-link ${isActive("/contact") ? "active" : ""}`} onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}

      <style>{`
        /* ── Base ─────────────────────────────────────────── */
        .gn-nav {
          background: rgba(45, 80, 22, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 0.85rem 1.5rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
        }

        .gn-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gn-logo {
          font-size: 1.35rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: 0.5px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .gn-logo-img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid #f4a220;
          flex-shrink: 0;
        }

        .gn-right-section {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        /* Desktop nav links */
        .gn-nav-links-desktop {
          display: flex;
          gap: 2rem;
          list-style: none;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .gn-link {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }

        .gn-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f4a220;
          transition: width 0.25s ease;
        }

        /* Hover and Active Logic - Order matters to avoid !important */
        .gn-link:hover { color: white; }
        .gn-link:hover::after { width: 100%; }

        /* Specific Active State */
        .gn-nav-links-desktop .gn-link.active {
          color: #f4a220;
        }
        .gn-nav-links-desktop .gn-link.active::after {
          width: 100%;
        }

        .gn-nav-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .gn-cart-btn {
          color: white;
          padding: 0.5rem 0.65rem;
          border-radius: 50%;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: background 0.2s;
        }
        .gn-cart-btn:hover { background: rgba(255,255,255,0.1); }
        
        .gn-cart-count {
          position: absolute;
          top: 1px;
          right: 0px;
          background: #e63946;
          color: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          line-height: 1;
        }

        .gn-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 6px;
          transition: background 0.2s;
          line-height: 0;
        }

        /* ── Mobile overlay & drawer ───────────────────────── */
        .gn-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 1100;
          animation: gn-fadeIn 0.2s ease;
        }

        .gn-mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: min(80vw, 300px);
          height: 100vh;
          background: #2d5016;
          padding: 1.5rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          overflow-y: auto;
          z-index: 1101;
          animation: gn-slideIn 0.25s ease;
          box-shadow: -4px 0 20px rgba(0,0,0,0.3);
        }

        .gn-close-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 0.4rem;
          align-self: flex-end;
          margin-bottom: 1.25rem;
          line-height: 0;
        }

        .gn-mobile-link {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.9rem 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: all 0.2s;
          display: block;
        }

        .gn-mobile-link.active {
          color: #f4a220;
          background: rgba(255, 255, 255, 0.05);
          padding-left: 1rem;
          border-left: 4px solid #f4a220;
        }

        /* Animations */
        @keyframes gn-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gn-slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        @media (max-width: 900px) {
          .gn-nav-links-desktop { gap: 1.25rem; }
          .gn-link { font-size: 0.88rem; }
          .gn-right-section { gap: 1rem; }
        }

        @media (max-width: 768px) {
          .gn-nav-links-desktop { display: none; }
          .gn-menu-btn { display: flex; }
          .gn-right-section { gap: 0.25rem; }
          .gn-logo { font-size: 1.15rem; }
          .gn-logo-img { width: 30px; height: 30px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;