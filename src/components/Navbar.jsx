// src/components/Navbar.jsx - FULLY MOBILE RESPONSIVE
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo}>
            🌱 GROWTOPIA
          </Link>

          {/* Desktop Navigation */}
          <ul style={styles.navLinksDesktop}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/products" style={styles.link}>Products</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/blog" style={styles.link}>Blog</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            <li>
              <Link to="/cart" style={styles.cartBtn}>
                <ShoppingCart size={20} />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span style={styles.cartCount}>{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            style={styles.menuBtn} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div style={styles.overlay} onClick={toggleMenu}>
          <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <Link to="/" style={styles.mobileLink} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/products" style={styles.mobileLink} onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/about" style={styles.mobileLink} onClick={toggleMenu}>
              About
            </Link>
            <Link to="/blog" style={styles.mobileLink} onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" style={styles.mobileLink} onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/cart" style={styles.mobileCartBtn} onClick={toggleMenu}>
              <ShoppingCart size={20} />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  nav: {
  //   background: "linear-gradient(180deg, rgba(115, 173, 184, 0.96), rgba(30, 144, 215, 0.9))",
  // //  background: "rgba(120, 158, 95, 0.92)",
    background: "linear-gradient(to right, #c5c380,  #8dc3d4, rgba(93, 148, 183, 0.9), rgba(115, 173, 184, 0.96))",
  backdropFilter: "blur(6px)",

    padding: '1rem 1.5rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
    
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  navLinksDesktop: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0
  },
  link: {
   color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  
  },
  cartBtn: {
    background: '#f4a220',
    color: 'white',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative',
    transition: 'all 0.3s',
    whiteSpace: 'nowrap'
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#e63946',
    color: 'white',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem',
    fontWeight: 'bold'
  },
  menuBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem'
  },
  overlay: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease'
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '80%',
    maxWidth: '300px',
    height: '100vh',
    background: '#2d5016',
    padding: '5rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    animation: 'slideIn 0.3s ease',
    overflowY: 'auto'
  },
  mobileLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    padding: '0.75rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.3s'
  },
  mobileCartBtn: {
    background: '#f4a220',
    color: 'white',
    padding: '1rem',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
    marginTop: '1rem'
  }
};

// Add responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @media (max-width: 768px) {
    nav ul {
      display: none !important;
    }

    nav button {
      display: block !important;
    }

    nav + div[style*="position: fixed"] {
      display: block !important;
    }
  }

  @media (min-width: 769px) {
    nav button {
      display: none !important;
    }
  }

  nav a:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    nav {
      padding: 0.8rem 1rem !important;
    }

    nav > div > a {
      font-size: 1.3rem !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('navbar-styles')) {
  styleSheet.id = 'navbar-styles';
  document.head.appendChild(styleSheet);
}

export default Navbar;
