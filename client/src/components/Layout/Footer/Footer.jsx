import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Top Products</h3>
            <ul>
              <li><a href="#!">Managed Website</a></li>
              <li><a href="#!">Manage Reputation</a></li>
              <li><a href="#!">Power Tools</a></li>
              <li><a href="#!">Marketing Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#!">Jobs</a></li>
              <li><a href="#!">Brand Assets</a></li>
              <li><a href="#!">Investor Relations</a></li>
              <li><a href="#!">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li><a href="#!">Jobs</a></li>
              <li><a href="#!">Brand Assets</a></li>
              <li><a href="#!">Investor Relations</a></li>
              <li><a href="#!">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#!">Guides</a></li>
              <li><a href="#!">Research</a></li>
              <li><a href="#!">Experts</a></li>
              <li><a href="#!">Agencies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <h3>Newsletter</h3>
            <p className="footer-caption">You can trust us. we only send promo offers,</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" />
              <button type="button">Subscribe</button>
            </form>
          </div>
          <div className="social-wrapper">
            <div className="social-links">
              <a href="#!" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#!" aria-label="Twitter"><FaTwitter /></a>
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
              <a href="#!" aria-label="Dribbble"><FaDribbble /></a>
            </div>
            <p className="copyright">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with
              <span> </span>
              by Colorlib
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
























































































































































































































































































































































