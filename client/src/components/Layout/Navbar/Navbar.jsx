import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="main-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span>PHONE: +01 256 25 235</span>
            <span className="divider">|</span>
            <span>EMAIL: INFO@EISER.COM</span>
          </div>
          <div className="top-bar-right">
            <Link to="/gift-card">GIFT CARD</Link>
            <span className="divider">|</span>
            <Link to="/track-order">TRACK ORDER</Link>
            <span className="divider">|</span>
            <Link to="/contact">CONTACT US</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="Eiser Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/pages" className={location.pathname === '/pages' ? 'active' : ''}>
                PAGES
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                CONTACT
              </Link>
            </li>
            {/* Add Page (Admin) Link - requirements mention this */}
            <li>
              <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>
                ADD
              </Link>
            </li>
          </ul>

          {/* Navbar Icons */}
          <div className="nav-icons">
            <button className="icon-btn">
              <Search size={20} />
            </button>
            <Link to="/basket" className="icon-btn cart-btn">
              <ShoppingCart size={20} />
              <span className="badge">0</span>
            </Link>
            <button className="icon-btn">
              <User size={20} />
            </button>
            <button className="icon-btn">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
