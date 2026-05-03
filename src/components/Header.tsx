import React from 'react';
import { CATEGORIES } from '../data/categories';
import './Header.css';

interface HeaderProps {
  onNavigate: (hash: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const goTo = (hash: string) => {
    onNavigate(hash);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button onClick={() => goTo('home')} className="logo-btn">
          <img src="/assets/tastesbyt-logo.png" alt="Tastes By T" />
          <span className="logo-text">Tastes By <span>T</span></span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => goTo('home')}>Home</button>
          {CATEGORIES.map((category) => (
            <button key={category.id} onClick={() => goTo(`category/${category.id}`)}>
              {category.title}
            </button>
          ))}
        </nav>

        <button className="nav-order-btn" onClick={() => goTo('category/cakes')}>Order Now</button>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <button onClick={() => goTo('home')}>Home</button>
        {CATEGORIES.map((category) => (
          <button key={category.id} onClick={() => goTo(`category/${category.id}`)}>
            {category.title}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
