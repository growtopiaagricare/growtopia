// src/pages/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Checkout feature coming soon! Total: ₹" + total.toLocaleString());
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <ShoppingBag size={80} color='#ccc' />
        <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
        <p style={styles.emptyText}>
          Looks like you haven't added any products yet
        </p>
        <Link to='/products'>
          <button style={styles.shopButton}>Start Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>
      <p style={styles.subtitle}>Review your items and proceed to checkout</p>

      {/* Mobile-only Checkout Bar stays at the top as requested */}
      <div className='mobile-checkout-header' style={styles.mobileHeader}>
        <div style={styles.mobileTotalRow}>
          <span>Total: </span>
          <span style={styles.totalPrice}>₹{total.toLocaleString()}</span>
        </div>
        <button onClick={handleCheckout} style={styles.checkoutBtn}>
          Proceed to Buy ({cart.reduce((sum, item) => sum + item.quantity, 0)}{" "}
          items)
        </button>
      </div>

      <button
        onClick={clearCart}
        style={styles.clearCartBtn}
        className='clear-cart-main'
      >
        Clear Cart
      </button>

      <div style={styles.cartLayout} className='cart-layout-container'>
        <div style={styles.cartItems}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={styles.cartItem}
              className='cart-item-responsive'
            >
              {/* CHANGE: Added cart-item-main to group image and text for better side-by-side control */}
              <div className='cart-item-main' style={styles.itemMain}>
                <div
                  style={styles.itemImage}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.itemImage}
                  />
                </div>

                <div style={styles.itemInfo} className='cart-item-details'>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemCategory}>{item.category}</p>
                  <p style={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                </div>
              </div>

              {/* CHANGE: Restructured controls into a footer-style row to match the Amazon/Modern design */}
              <div
                style={styles.cartItemControls}
                className='cart-item-controls'
              >
                <div style={styles.quantityControl} className='qty-wrapper'>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={styles.qtyBtn}
                    className='qty-minus'
                  >
                    <Minus size={16} />
                  </button>
                  {/* <span style={styles.quantity}>{item.quantity}</span> */}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e)=>{
                      const val = parseInt(e.target.value);
                      //Ensure it's a number and at least 1
                      if (!isNaN(val) && val >=1){
                        updateQuantity(item.id,val);
                      } else if (e.target.value === ""){
                        //Allow empty string while typing, but handle onBlur ()
                        updateQuantity(item.id,0);
                      }
                    }}
                    onBlur={(e)=>{
                      //Reset to 1 if user leaves it empty
                      if(item.quantity < 1) updateQuantity(item.id,1);
                    }}
                    style={styles.quantityInput}
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={styles.qtyBtn}
                    className='qty-plus'
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div style={styles.itemTotal} className='item-subtotal'>
                  {/* Label removed in mobile CSS usually, kept here for desktop clarity */}
                  <p style={styles.totalLabel}>Subtotal</p>
                  <p style={styles.totalPrice}>
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeBtn}
                  className='remove-action-btn'
                >
                  <Trash2 size={24} style={{ marginRight: "4px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Card */}
        <div style={styles.cartSummary} className='cart-summary-card'>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          <div style={styles.summaryRow}>
            <span>
              Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)}{" "}
              items)
            </span>
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
          <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <button onClick={handleCheckout} style={styles.checkoutBtn}>
            Proceed to Checkout
          </button>
          <Link to='/products'>
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
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "2rem",
    width: "100%",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2d5016",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "3rem",
    fontSize: "1.1rem",
  },
  mobileHeader: {
    padding: "1rem",
    background: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  mobileTotalRow: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  clearCartBtn: {
    background: "transparent",
    color: "#e63946",
    border: "1px solid #e63946",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    margin: "1rem 0",
    width: "fit-content",
  },
  cartLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    gap: "2rem",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  cartItem: {
    background: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column", // Base stack for inner logic
    gap: "1rem",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    border: "1px solid #eee",
  },
  itemMain: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "flex-start",
  },
  itemImage: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
  },
  itemInfo: {
    flex: "1",
    minWidth: "0",
  },
  itemName: {
    fontSize: "1.25rem",
    color: "#2d5016",
    margin: "0 0 0.25rem 0",
    fontWeight: "600",
  },
  itemCategory: {
    fontSize: "0.95rem",
    color: "#888",
    margin: "0 0 0.5rem 0",
  },
  itemPrice: {
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: "500",
  },
  cartItemControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 0",
    borderTop: "1px solid #f0f0f0",
    borderBottom: "1px solid #f0f0f0",
    gap: "1rem",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    background: "#f8f9fa",
    borderRadius: "6px",
    padding: "2px",
    border: "1px solid #e0e0e0",
    width: "120px",
    justifyContent: "center",
  },
  quantityInput: {
    fontSize: "1rem",
    fontWeight: "600",
    width: "45px",
    textAlign: "center",
    color: "#2d5016",
    border: "none",
    background: "transparent",
    outline: "none",
  },
  qtyBtn: {
    background: "transparent",
    color: "#333",
    border: "none",
    width: "36px",
    height: "36px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
  },
  quantity: {
    fontSize: "1rem",
    fontWeight: "600",
    minWidth: "40px",
    textAlign: "center",
    color: "#2d5016",
  },
  itemTotal: {
    textAlign: "right",
    minWidth: "130px",
    flexShrink: 0,
  },
  totalLabel: {
    fontSize: "0.8rem",
    color: "#999",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  totalPrice: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#2d5016",
    margin: 0,
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    color: "#e63946",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: "500",
    padding: "4px 8px",
    borderRadius: "4px",
    transition: "background 0.2s",
  },
  cartSummary: {
    background: "white",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    height: "fit-content",
    position: "sticky",
    top: "20px",
  },
  summaryTitle: {
    fontSize: "1.5rem",
    color: "#2d5016",
    marginBottom: "1.5rem",
    fontWeight: "700",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    fontSize: "1rem",
    color: "#444",
  },
  freeShipping: {
    color: "#6b9e3e",
    fontWeight: "600",
  },
  divider: {
    height: "1px",
    background: "#eee",
    margin: "1.5rem 0",
  },
  totalRow: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#2d5016",
  },
  checkoutBtn: {
    width: "100%",
    background: "#f4a220",
    color: "white",
    border: "none",
    padding: "1.1rem",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "1.5rem",
    boxShadow: "0 4px 12px rgba(244, 162, 32, 0.3)",
  },
  continueBtn: {
    width: "100%",
    background: "transparent",
    color: "#6b9e3e",
    border: "2px solid #6b9e3e",
    padding: "0.85rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "1rem",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
  },
  benefits: {
    marginTop: "2rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #eee",
    lineHeight: "2",
    color: "#777",
    fontSize: "0.85rem",
  },
  emptyCart: {
    textAlign: "center",
    padding: "5rem 2rem",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: "2.2rem",
    color: "#2d5016",
    margin: "1.5rem 0 1rem",
  },
  emptyText: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  shopButton: {
    background: "#6b9e3e",
    color: "white",
    border: "none",
    padding: "1rem 3rem",
    borderRadius: "30px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(107, 158, 62, 0.3)",
  },
};

export default Cart;
