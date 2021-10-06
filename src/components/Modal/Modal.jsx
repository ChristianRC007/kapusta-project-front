import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, text, children }) {
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

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <button className="modal-close" type="button" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" >
            <path d="M1 1L13 13" stroke="#52555F" strokeWidth="2" />
            <path d="M1 13L13 0.999999" stroke="#52555F" strokeWidth="2" />
          </svg>
        </button>
        <p className="Modal-text">{text}</p>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}
