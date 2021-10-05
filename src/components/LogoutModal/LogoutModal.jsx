import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import LogoutBttn from '../LogoutBttn';

import '../../styles/main.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
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
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
        ></button>
        <p>Вы действительно хотите выйти?</p>
        <LogoutBttn />
        <button onClick={onClose}>НЕТ</button>
      </div>
    </div>,
    modalRoot,
  );
}
