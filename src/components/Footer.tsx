import React from 'react';
import { CATEGORIES } from '../data/categories';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/tastesbyt-logo.jpg" alt="Tastes By T" />
          <p>Handcrafted excellence in every bite. Creating beautiful, delicious memories in Cape Town.</p>
        </div>

        <div className="footer-col">
          <h5>Get in Touch</h5>
          <p>Cape Town, Western Cape</p>
          <p>South Africa</p>
          <p className="footer-email"><a href="mailto:takes.tastes.byt@gmail.com">takes.tastes.byt@gmail.com</a></p>
        </div>

        <div className="footer-col">
          <h5>Menu</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            {CATEGORIES.map((category) => (
              <li key={category.id}><a href={`#category/${category.id}`}>{category.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Stay Connected</h5>
          <div className="social-links">
            <a href="https://www.instagram.com/tastes.by.t/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://www.facebook.com/share/168kW4dQ2H/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://www.tiktok.com/@tastes.by.t" target="_blank" rel="noopener noreferrer" className="social-link">TikTok</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tastes By T. All rights reserved.</p>
        <p>Website made by <a href="https://jmdev.co.za" target="_blank" rel="noopener noreferrer">JMdev</a></p>
      </div>
    </footer>
  );
};

export default Footer;
