import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CostsModal from '../CostsModal';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import balanceOperations from '../../redux/balance/balance-operations';
import { toast } from 'react-toastify';

export default function MobileCounterTabs() {
  const dispatch = useDispatch();
  const [costs, setCosts] = useState(true);
  const [profits, setProfits] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const selectedDate = useSelector(transactionsSelectors.currentDate);

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

  const handleSubmit = data => {
    if (profits) {
      dispatch(transactionsOperations.addIncome(data, onSuccess, onError));
    }
    if (costs) {
      dispatch(transactionsOperations.addExpense(data, onSuccess, onError));
    }
  };

  const onSuccess = () => {
    toggleModal();
    toast.success('Transaction successfully added.');
    dispatch(balanceOperations.getBalance());
    dispatch(transactionsOperations.getLast());
  };

  const onError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  return (
    <>
      <div className="mobile-counter-tabs-wrapper">
        <button
          className={'mobile-counter-tab-header-buttons'}
          onClick={clickCosts}
        >
          Расход
        </button>
        <button
          className={'mobile-counter-tab-header-buttons'}
          type="button"
          onClick={clickProfits}
        >
          Доход
        </button>
      </div>

      {showModal && (
        <CostsModal
          costs={costs}
          onClose={toggleModal}
          onSubmit={handleSubmit}
        />
      )}

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
