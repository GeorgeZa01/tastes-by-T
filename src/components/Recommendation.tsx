import React, { useMemo, useState } from 'react';
import type { RecommendationResponse } from '../types';
import { fetchRecommendation } from '../utils/api';
import { CATEGORIES } from '../data/categories';
import './Recommendation.css';

const LOCAL_MATCHES: Record<string, string[]> = {
  chocolate: ['Brownie Slab', 'Brownies (Individual)', 'Chocolate-Covered Oreos', 'Truffles'],
  birthday: ['Custom Cakes', 'Bento Cake', 'Birthday Buzz Box', 'Cupcakes'],
  party: ['Super Celebration Box', 'Birthday Buzz Box', 'Classic Pack', 'Cupcakes'],
  gift: ['Bento Box', 'Bento Cake', 'Sugar Cookies', 'Truffles'],
  cookies: ['Sugar Cookies', 'Chocolate-Covered Oreos'],
  small: ['Bento Cake', 'Cupcakes (Individual)', 'Brownies (Individual)'],
};

const buildLocalRecommendation = (prompt: string): RecommendationResponse => {
  const normalizedPrompt = prompt.toLowerCase();
  const allProducts = CATEGORIES.flatMap((category) =>
    category.products.map((product) => ({ ...product, categoryId: category.id })),
  );

  const matchedName = Object.entries(LOCAL_MATCHES).find(([keyword]) =>
    normalizedPrompt.includes(keyword),
  )?.[1][0];

  const product = allProducts.find((item) => item.name === matchedName) ?? allProducts[0];

  return {
    productName: product.name,
    suggestedCategory: product.categoryId,
    rationale: `${product.name} is a lovely fit for that request: ${product.description}`,
  };
};

const Recommendation: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const categoryTitle = useMemo(() => {
    if (!recommendation) return '';
    return CATEGORIES.find((category) => category.id === recommendation.suggestedCategory)?.title ?? 'the menu';
  }, [recommendation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please describe what you're looking for.");
      return;
    }

    setLoading(true);
    setError(null);
    setRecommendation(null);

    const apiResult = await fetchRecommendation(prompt.trim());
    setRecommendation(apiResult ?? buildLocalRecommendation(prompt.trim()));
    setLoading(false);
  };

  const handleNavigate = (categoryId: string) => {
    window.location.hash = `#category/${categoryId}`;
  };

  return (
    <section className="section-pad recommendation-wrap">
      <div className="container">
        <div className="recommendation-section">
          <h2>Not Sure What to Order?</h2>
          <p className="subtitle">Describe the occasion or what you are craving and we will recommend a treat.</p>

          <form onSubmit={handleSubmit} className="recommendation-form">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A cosy birthday for 10 people"
              className="recommendation-input"
              disabled={loading}
            />
            <button type="submit" className="rec-btn" disabled={loading}>
              {loading ? (
                <>
                  Finding your treat
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </>
              ) : (
                'Get Recommendation'
              )}
            </button>
          </form>

          {error && <div className="recommendation-error">{error}</div>}

          {recommendation && (
            <div className="recommendation-result">
              <h3>We recommend: {recommendation.productName}</h3>
              <p>"{recommendation.rationale}"</p>
              <button
                onClick={() => handleNavigate(recommendation.suggestedCategory)}
                className="btn-outline"
              >
                Explore {categoryTitle}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
