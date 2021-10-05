import React, { useState } from 'react';

import Modal from '../LogoutModal';
export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = largeImg => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      HEADER
      <button onClick={openModal}>Выйти</button>
      {showModal && <Modal onClose={closeModal}></Modal>}
    </div>
  );
}
