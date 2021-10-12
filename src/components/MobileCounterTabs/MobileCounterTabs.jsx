import { useState } from 'react';
import CostsModal from '../CostsModal';
// import MobileInputContainer from '../../components/MobileInputContainer';

export default function MobileCounterTabs() {
  const [costs, setCosts] = useState(true);
  const [profits, setProfits] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const clickCosts = () => {
    setProfits(false);
    setCosts(true);
    toggleModal();
  };

  const clickProfits = () => {
    setProfits(true);
    setCosts(false);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="mobile-counter-tabs-wrapper">
        <button
          className={
            costs
              ? 'mobile-counter-tab-header-buttons mobile-counter-tab-active'
              : 'mobile-counter-tab-header-buttons'
          }
          onClick={clickCosts}
        >
          Расход
        </button>
        <button
          className={
            profits
              ? 'mobile-counter-tab-header-buttons mobile-counter-tab-active'
              : 'mobile-counter-tab-header-buttons'
          }
          type="button"
          onClick={clickProfits}
        >
          Доход
        </button>
      </div>

      {showModal && <CostsModal onClose={toggleModal} />}

      {/* {costs ? (
        <div className="mobile-counter-tab-container">
          Витрати
          <MobileInputContainer />
        </div>
      ) : (
        <div className="mobile-counter-tab-container">
          Заробіток
          <MobileInputContainer />
        </div>
      )} */}
    </>
  );
}
