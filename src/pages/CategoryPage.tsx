import React from 'react';
import type { Category } from '../types';
import './CategoryPage.css';

interface CategoryPageProps {
  category?: Category;
  onNavigate: (hash: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onNavigate }) => {
  if (!category) {
    return (
      <section className="not-found page-fade">
        <h1>Sweet Spot Not Found</h1>
        <p>Oops, this collection is not on the menu.</p>
        <button className="btn-primary" onClick={() => onNavigate('home')}>Return Home</button>
      </section>
    );
  }

  return (
    <div className="page-fade">
      <div className="container section-pad-small">
        <button className="back-link" onClick={() => onNavigate('home')}>Back to all collections</button>
      </div>

      <section className="category-hero">
        <div className="eyebrow">Tastes By T</div>
        <h1>{category.title}</h1>
        <p>{category.description}</p>

        <div className="order-cta">
          <a href={category.formLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Place Your Order Now
          </a>
          <p>You will be redirected to our secure Google Form.</p>
        </div>
      </section>

      <section className="container section-pad products-section">
        <div className="products-grid">
          {category.products.map((product) => (
            <article className="product-card" key={product.id}>
              <img className="product-card__img" src={product.image} alt={product.name} />
              <div className="product-card__body">
                <h2 className="product-card__name">{product.name}</h2>
                <p className="product-card__desc">{product.description}</p>
                <span className="product-card__price">{product.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="bottom-order">
          <a href={category.formLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Place Your Order Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
