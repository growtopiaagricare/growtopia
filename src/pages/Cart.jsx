// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Checkout feature coming soon! Total: ₹' + total.toLocaleString());
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <ShoppingBag size={80} color="#ccc" />
        <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
        <p style={styles.emptyText}>
          Looks like you haven't added any products yet
        </p>
        <Link to="/products">
          <button style={styles.shopButton}>Start Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>
      <p style={styles.subtitle}>Review your items and proceed to checkout</p>

      <div style={styles.cartLayout}>
        {/* Cart Items */}
        <div style={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.itemImage}>{item.image}</div>
              
              <div style={styles.itemInfo}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemCategory}>{item.category}</p>
                <p style={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
              </div>

              <div style={styles.quantityControl}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.qtyBtn}
                >
                  <Minus size={16} />
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.qtyBtn}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div style={styles.itemTotal}>
                <p style={styles.totalLabel}>Total</p>
                <p style={styles.totalPrice}>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                style={styles.removeBtn}
                title="Remove item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <button onClick={clearCart} style={styles.clearCartBtn}>
            Clear Cart
          </button>
        </div>

        {/* Cart Summary */}
        <div style={styles.cartSummary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          
          <div style={styles.summaryRow}>
            <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>GST (18%)</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span style={styles.freeShipping}>FREE</span>
          </div>

          <div style={styles.divider}></div>

          <div style={{...styles.summaryRow, ...styles.totalRow}}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button onClick={handleCheckout} style={styles.checkoutBtn}>
            Proceed to Checkout
          </button>

          <Link to="/products">
            <button style={styles.continueBtn}>Continue Shopping</button>
          </Link>

          <div style={styles.benefits}>
            <p>✓ Free delivery on all orders</p>
            <p>✓ Secure payment options</p>
            <p>✓ Easy returns within 15 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2d5016',
    marginBottom: '0.5rem',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '3rem',
    fontSize: '1.1rem'
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem'
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  cartItem: {
    background: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '100px 2fr 150px 120px auto',
    gap: '1.5rem',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  itemImage: {
    fontSize: '4rem',
    textAlign: 'center'
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem'
  },
  itemName: {
    fontSize: '1.2rem',
    color: '#2d5016',
    margin: 0
  },
  itemCategory: {
    fontSize: '0.9rem',
    color: '#999',
    margin: 0
  },
  itemPrice: {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '600',
    margin: 0
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center'
  },
  qtyBtn: {
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantity: {
    fontSize: '1.1rem',
    fontWeight: '600',
    minWidth: '30px',
    textAlign: 'center'
  },
  itemTotal: {
    textAlign: 'right'
  },
  totalLabel: {
    fontSize: '0.85rem',
    color: '#999',
    margin: 0
  },
  totalPrice: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#f4a220',
    margin: 0
  },
  removeBtn: {
    background: 'transparent',
    border: 'none',
    color: '#e63946',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '5px',
    transition: 'background 0.3s'
  },
  clearCartBtn: {
    background: '#e63946',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
  cartSummary: {
    background: 'white',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '100px'
  },
  summaryTitle: {
    fontSize: '1.5rem',
    color: '#2d5016',
    marginBottom: '1.5rem'
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '1rem',
    color: '#333'
  },
  freeShipping: {
    color: '#6b9e3e',
    fontWeight: '600'
  },
  divider: {
    height: '1px',
    background: '#e0e0e0',
    margin: '1.5rem 0'
  },
  totalRow: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2d5016'
  },
  checkoutBtn: {
    width: '100%',
    background: '#f4a220',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1.5rem'
  },
  continueBtn: {
    width: '100%',
    background: 'transparent',
    color: '#6b9e3e',
    border: '2px solid #6b9e3e',
    padding: '0.75rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center'
  },
  benefits: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e0e0e0',
    lineHeight: '2',
    color: '#666',
    fontSize: '0.9rem'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '5rem 2rem',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyTitle: {
    fontSize: '2rem',
    color: '#2d5016',
    margin: '1.5rem 0 1rem'
  },
  emptyText: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  },
  shopButton: {
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default Cart;