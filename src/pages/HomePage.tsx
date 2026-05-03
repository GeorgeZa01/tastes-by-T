import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Recommendation from '../components/Recommendation';
import { CATEGORIES } from '../data/categories';
import './HomePage.css';

interface HomePageProps {
  onNavigate: (hash: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home" className="home-page page-fade">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <div className="hero-badge">Handcrafted in Cape Town</div>
          <h1>Your Perfect Dessert,<br /><em>Beautifully Made.</em></h1>
          <p>Bespoke cakes, cupcakes, party packs and artisan sweet treats, crafted with love for every occasion.</p>
          <div className="hero-actions">
            <button onClick={() => onNavigate('category/cakes')} className="hero-cta">View Signature Cakes</button>
            <button onClick={() => onNavigate('category/cupcakes')} className="hero-cta-ghost">Cupcakes & Bakes</button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <h2>Explore Our Collections</h2>
            <div className="divider"></div>
            <p>From celebration cakes to bite-sized treats, find the perfect indulgence.</p>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={(id) => onNavigate(`category/${id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <Recommendation />

      <section className="section-pad how-to-order-wrap">
        <div className="container">
          <div className="how-to-order">
            <div className="section-heading">
              <h2>How to Order</h2>
              <div className="divider"></div>
              <p>Simple, quick, and delicious every time.</p>
            </div>
            <div className="steps-grid">
              <div className="step">
                <div className="step__number">1</div>
                <h3>Browse the Menu</h3>
                <p>Explore our collections and find the perfect treat for your occasion.</p>
              </div>
              <div className="step">
                <div className="step__number">2</div>
                <h3>Click Place Your Order</h3>
                <p>Each category has a dedicated order button linked to our Google Form.</p>
              </div>
              <div className="step">
                <div className="step__number">3</div>
                <h3>Fill in the Form</h3>
                <p>Share your details, flavour preferences, and any special requirements.</p>
              </div>
              <div className="step">
                <div className="step__number">4</div>
                <h3>We Get in Touch</h3>
                <p>We will confirm your order and arrange collection or delivery details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
