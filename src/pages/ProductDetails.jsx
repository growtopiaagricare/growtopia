// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ArrowLeft, Check } from 'lucide-react';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/products">
          <button style={styles.backButton}>Back to Products</button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/products')} style={styles.backBtn}>
        <ArrowLeft size={20} /> Back to Products
      </button>

      <div style={styles.productContainer}>
        <div style={styles.imageSection}>
          <div style={styles.productImage}>{product.image}</div>
          <span style={styles.categoryBadge}>{product.category}</span>
        </div>

        <div style={styles.infoSection}>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.productDescription}>{product.description}</p>
          
          <div style={styles.priceSection}>
            <span style={styles.price}>₹{product.price.toLocaleString()}</span>
            <span style={styles.tax}>+ GST</span>
          </div>

          <button onClick={handleAddToCart} style={styles.addToCartBtn}>
            Add to Cart
          </button>

          <div style={styles.deliveryInfo}>
            <p>✓ Free delivery on orders above ₹10,000</p>
            <p>✓ Cash on Delivery available</p>
            <p>✓ Easy returns within 15 days</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Product Features</h2>
        <div style={styles.featuresList}>
          {product.features.map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <Check size={20} color="#6b9e3e" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div style={styles.specsSection}>
        <h2 style={styles.specsTitle}>Specifications</h2>
        <table style={styles.specsTable}>
          <tbody>
            <tr style={styles.specsRow}>
              <td style={styles.specsLabel}>Product ID</td>
              <td style={styles.specsValue}>GROW-{product.id.toString().padStart(4, '0')}</td>
            </tr>
            <tr style={styles.specsRow}>
              <td style={styles.specsLabel}>Category</td>
              <td style={styles.specsValue}>{product.category}</td>
            </tr>
            <tr style={styles.specsRow}>
              <td style={styles.specsLabel}>Warranty</td>
              <td style={styles.specsValue}>1-2 Years (as mentioned in features)</td>
            </tr>
            <tr style={styles.specsRow}>
              <td style={styles.specsLabel}>Manufacturer</td>
              <td style={styles.specsValue}>GROWTOPIA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%',
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: '#6b9e3e',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '2rem',
    padding: '0.5rem',
    fontWeight: '600'
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  },
  imageSection: {
    textAlign: 'center'
  },
  productImage: {
    fontSize: '12rem',
    marginBottom: '1rem',
    background: '#f8f9fa',
    borderRadius: '15px',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px'
  },
  categoryBadge: {
    display: 'inline-block',
    background: '#6b9e3e',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '1rem'
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  productName: {
    fontSize: '2.5rem',
    color: '#2d5016',
    marginBottom: '0'
  },
  productDescription: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.8'
  },
  priceSection: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem'
  },
  price: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#f4a220'
  },
  tax: {
    fontSize: '1rem',
    color: '#999'
  },
  addToCartBtn: {
    background: '#6b9e3e',
    color: 'white',
    padding: '1.2rem 2rem',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
    width: '100%'
  },
  deliveryInfo: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '10px',
    lineHeight: '2'
  },
  featuresSection: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  featuresTitle: {
    fontSize: '1.8rem',
    color: '#2d5016',
    marginBottom: '1.5rem'
  },
  featuresList: {
    display: 'grid',
    gap: '1rem'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.1rem',
    color: '#333'
  },
  specsSection: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    overflowX: 'hidden',
  },
  specsTitle: {
    fontSize: '1.8rem',
    color: '#2d5016',
    marginBottom: '1.5rem'
  },
  specsTable: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  specsRow: {
    borderBottom: '1px solid #e0e0e0'
  },
  specsLabel: {
    padding: '1rem',
    fontWeight: '600',
    color: '#666',
    width: '40%'
  },
  specsValue: {
    padding: '1rem',
    color: '#333'
  },
  notFound: {
    textAlign: 'center',
    padding: '5rem 2rem'
  },
  backButton: {
    marginTop: '2rem',
    padding: '1rem 2rem',
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer'
  }
};

export default ProductDetails;