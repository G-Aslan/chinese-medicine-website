import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaLeaf } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const { getCartCount } = useCart();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <FaLeaf style={{ marginLeft: '8px' }} />
            רפואה סינית
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/')}>
                דף הבית
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services')}>
                שירותים
              </Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products')}>
                מוצרים
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link cart-icon">
                <FaShoppingCart />
                {getCartCount() > 0 && (
                  <span className="cart-badge" style={{ animation: 'bounce 0.6s ease-in-out' }}>
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
