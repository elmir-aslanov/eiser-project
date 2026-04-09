import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-area bg-[#04091e] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          {/* Top Products */}
          <div className="footer-widget">
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider">Top Products</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Managed Website</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Manage Reputation</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Power Tools</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Marketing Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-widget">
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-widget">
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider">Features</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-widget">
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Experts</a></li>
              <li><a href="#" className="hover:text-[#71cd14] transition-colors">Agencies</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter and Copyright Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-800 pt-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">You can trust us. we only send promo offers,</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#191d2e] border-none text-white px-6 py-3 w-full max-w-xs focus:ring-1 focus:ring-[#71cd14] transition-all outline-none"
              />
              <button className="bg-[#71cd14] text-white px-8 py-3 uppercase font-bold text-xs hover:bg-white hover:text-[#71cd14] transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-[#191d2e] flex items-center justify-center hover:bg-[#71cd14] transition-all"><FaFacebookF size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#191d2e] flex items-center justify-center hover:bg-[#71cd14] transition-all"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#191d2e] flex items-center justify-center hover:bg-[#71cd14] transition-all"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#191d2e] flex items-center justify-center hover:bg-[#71cd14] transition-all"><FaGlobe size={18} /></a>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright ©2026 All rights reserved | This template is made with ♡ by Colorlib
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
