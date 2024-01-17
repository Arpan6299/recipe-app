import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="social-icons">
        <a href="https://facebook.com" >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" >
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About </a></li>
            <li><a href="/contact">Contact</a></li>
              
          </ul>
        </div>

        <div className="footer-section">
          <h3> Developed by @Arpan Kumari</h3>
          
          
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: imarpan060@gmail.com</p>
          <p>Phone: +91 8210012176</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
