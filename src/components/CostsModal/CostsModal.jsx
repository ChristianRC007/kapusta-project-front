import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MobileInputContainer from '../MobileInputContainer';
import Header from '../../components/Header/Header';

const modalRoot = document.querySelector('#modal-root');

export default function CostsModal({ costs, onClose, onSubmit }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="costs-overlay">
      <div className="costs-modal">
        <Header />
        <div className="costs-close-div">
          <button className="costs-close-btn" type="button" onClick={onClose}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                fill="#FF751D"
              />
            </svg>
          </button>
        </div>

        <MobileInputContainer costs={costs} onSubmit={onSubmit} />
      </div>
    </div>,
    modalRoot,
  );
}
