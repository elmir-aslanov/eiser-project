import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useShop } from "../../../context/ShopContext";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileOpen(false);
  const { cartCount, wishlistCount } = useShop();

  return (
    <header>
      <div className="top-header">
        <div className="container header-row">
          <div className="top-left">
            <span>PHONE: +01 256 25 235</span>
            <span>EMAIL: INFO@EISER.COM</span>
          </div>
          <div className="top-right">
            <a href="#!">GIFT CARD</a>
            <a href="#!">TRACK ORDER</a>
            <NavLink to="/contact">CONTACT US</NavLink>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container nav-row">
          <NavLink to="/" className="logo" onClick={closeMobileMenu}>
            <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="Eiser" />
          </NavLink>
          <button className="mobile-toggle" onClick={() => setIsMobileOpen((prev) => !prev)} aria-label="Open menu">
            {isMobileOpen ? <FiX /> : <FiMenu />}
          </button>
          <ul className={`nav-links ${isMobileOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={closeMobileMenu}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMobileMenu}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/checkout" onClick={closeMobileMenu}>Checkout</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            </li>
          </ul>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search"><FiSearch /></button>
            <Link className="icon-btn counter-icon" aria-label="Cart" to="/cart"><FiShoppingCart /><span>{cartCount}</span></Link>
            <button className="icon-btn" aria-label="User"><FiUser /></button>
            <Link className="icon-btn counter-icon" aria-label="Wishlist" to="/shop"><FiHeart /><span>{wishlistCount}</span></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
