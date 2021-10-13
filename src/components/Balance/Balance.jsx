import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balanceSelectors } from '../../redux/balance';
import balanceOperations from '../../redux/balance/balance-operations';
import MounthAmountsButton from '../MounthAmountsButton';

const Balance = () => {
  const dispatch = useDispatch();

  const currentBalance = useSelector(balanceSelectors.balanceCurrent);
  const balanceLoading = useSelector(balanceSelectors.balanceLoading);

  const [balance, setBalance] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const loadingMessage = 'loading...';

  useEffect(() => { 
    dispatch(balanceOperations.getBalance())
  }, []);

  //updating balance from state
  useEffect(() => {
    setBalance(currentBalance || '');
  }, [currentBalance]);

  const removeTooltip = () => {
    setTooltipOpen(false);
  };

  const handleClick = () => {
    dispatch(balanceOperations.updateBalance(balance));
  };

  return (
    <div className="balance">
      <p className="balance__title">Баланс:</p>
      <div className="balance__buttons">
        <input
          className="balance__input"
          type="text"
          pattern="^[ 0-9]+$"
          placeholder="00.00 UAH"
          value={balanceLoading ? loadingMessage : balance}
          onChange={e => {
            setBalance(e.target.value);
          }}
        />
        <button
          className="balance__submit balance-btn"
          type="button"
          onClick={handleClick}
        >
          Подтвердить
        </button>
      </div>
      <MounthAmountsButton/>

      {!balance && !balanceLoading && tooltipOpen && (
        <div className="balance__tooltip" onClick={removeTooltip}>
          <p className="balance__tooltip__text-first">
            Привет! Для начала работы внеси текущий баланс своего счета!
          </p>
          <p className="balance__tooltip__text-second">
            Ты не можешь тратить деньги пока их у тебя нет :){' '}
          </p>
        </div>
      )}
    </div>
  );
};

export default Balance;
