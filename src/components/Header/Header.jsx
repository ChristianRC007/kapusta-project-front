import React, { useState } from 'react';
import Modal from '../Modal';
import MainButton from '../MainButton';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      HEADER
      <button onClick={toggleModal}>Выйти</button>
      {showModal && (
        <Modal onClose={toggleModal} text="Вы действительно хотите выйти?">
          <MainButton type="submit" text="Да" className="main" accent />
          <MainButton
            onClick={toggleModal}
            type="button"
            text="Нет"
            className="main"
          />
        </Modal>
      )}
    </div>
  );
}
