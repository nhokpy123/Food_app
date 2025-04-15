import { Link, useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../App';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useContext(CartContext);
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          FastFood
        </Link>
        
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')}>
            Trang chủ
          </Link>
          <Link to="/products" className={isActive('/products')}>
            Sản phẩm
          </Link>
          <Link to="/cart" className={`${isActive('/cart')} cart-link`}>
            Giỏ hàng
            {cart && cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
          <Link to="/checkout" className={isActive('/checkout')}>
            Thanh toán
          </Link>
          
          <div className="nav-buttons">
            <Link to="/login" className="login-button">
              Login
            </Link>
            <Link to="/register" className="register-button">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}