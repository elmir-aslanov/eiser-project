import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`main-header ${isScrolled ? 'sticky' : ''}`}>
      {/* Top Bar - Hidden when scrolled for cleaner sticky look, matching modern Eiser behavior */}
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
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

          {/* Hamburger Menu Icon */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/pages" className={location.pathname === '/pages' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                PAGES
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/add" className={location.pathname === '/add' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                ADD
              </Link>
            </li>
          </ul>

          {/* Navbar Icons */}
          <div className="nav-icons">
            <button className="icon-btn">
              <FiSearch size={20} />
            </button>
            <Link to="/basket" className="icon-btn cart-btn">
              <FaShoppingCart size={20} />
              <span className="badge">0</span>
            </Link>
            <button className="icon-btn">
              <FiUser size={20} />
            </button>
            <button className="icon-btn">
              <FiHeart size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
