// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
          <ErrorBoundary>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products onAddToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/cart" element={
                <Cart 
                  cart={cart} 
                  updateQuantity={updateQuantity} 
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;