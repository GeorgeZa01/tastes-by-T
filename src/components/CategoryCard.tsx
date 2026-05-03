import React from 'react';
import type { Category } from '../types';
import './CategoryCard.css';

interface CategoryCardProps {
  category: Category;
  onSelect: (id: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  return (
    <article className="category-card slide-up">
      <img className="category-card__img" src={category.image} alt={category.title} />
      <div className="category-card__body">
        <h3 className="category-card__title">{category.title}</h3>
        <p className="category-card__desc">{category.description}</p>
        <button className="btn-outline" onClick={() => onSelect(category.id)}>
          View Menu
        </button>
      </div>
    </article>
  );
};

export default CategoryCard;
