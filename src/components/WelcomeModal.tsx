import React from 'react';
import './WelcomeModal.css';

interface WelcomeModalProps {
  onClose: () => void;
  onNavigate: (hash: string) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose, onNavigate }) => {
  const viewMenu = () => {
    onNavigate('category/cakes');
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close welcome modal">×</button>
        <div className="modal-icon" aria-hidden="true">🎂</div>
        <h2 id="welcome-title">Welcome to Tastes By T!</h2>
        <p>Handcrafted cakes, cupcakes, party packs and artisan treats, made with love in Cape Town. Orders are placed via our simple Google Form.</p>
        <div className="modal-actions">
          <button className="modal-btn-primary" onClick={viewMenu}>View Our Menu</button>
          <button className="modal-btn-ghost" onClick={onClose}>Browse the site first</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
