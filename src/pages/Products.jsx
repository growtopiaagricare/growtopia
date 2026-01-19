// src/pages/Products.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

const Products = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Products</h1>
      <p style={styles.subtitle}>
        Discover innovative agricultural solutions designed to boost productivity and sustainability
      </p>

      {/* Category Filter */}
      <div style={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.filterButton,
              ...(selectedCategory === category ? styles.filterButtonActive : {})
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={styles.productsGrid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.productCard}>
            <Link to={`/product/${product.id}`} style={styles.productLink}>
              <div style={styles.productImage}>{product.image}</div>
              <span style={styles.categoryBadge}>{product.category}</span>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>₹{product.price.toLocaleString()}</p>
            </Link>
            <div style={styles.buttonGroup}>
              <Link to={`/product/${product.id}`} style={styles.detailsButton}>
                View Details
              </Link>
              <button 
                onClick={(e) => handleAddToCart(e, product)}
                style={styles.cartButton}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div style={styles.noProducts}>
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '3rem 2rem'
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#2d5016',
    marginBottom: '1rem'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem'
  },
  filterButton: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #6b9e3e',
    background: 'white',
    color: '#6b9e3e',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  filterButtonActive: {
    background: '#6b9e3e',
    color: 'white'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column'
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
    padding: '1.5rem',
    flex: 1,
    display: 'block'
  },
  productImage: {
    fontSize: '5rem',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  categoryBadge: {
    display: 'inline-block',
    background: '#e8f5e9',
    color: '#2d5016',
    padding: '0.3rem 1rem',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  productName: {
    fontSize: '1.3rem',
    color: '#2d5016',
    marginBottom: '0.5rem'
  },
  productDescription: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '1rem'
  },
  productPrice: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#f4a220',
    marginBottom: '1rem'
  },
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    padding: '0 1.5rem 1.5rem'
  },
  detailsButton: {
    padding: '0.75rem',
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.3s'
  },
  cartButton: {
    padding: '0.75rem',
    background: '#f4a220',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  noProducts: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.2rem',
    color: '#666'
  }
};

export default Products;