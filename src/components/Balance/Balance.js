import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balanceSelectors } from '../../redux/balance';
import balanceOperations from '../../redux/balance/balance-operations';

const Balance = () => {
  const dispatch = useDispatch();

  const currentBalance = useSelector(balanceSelectors.balanceCurrent);

  const [balance, setBalance] = useState(currentBalance);
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const removeTooltip = () => {
    setTooltipOpen(false);
  };

  return (
    <div className="balance">
      <p className="balance__title">Баланс:</p>
      <input
        className="balance__input"
        type="number"
        step="0.01"
        placeholder="00.00 UAH"
        value={balance}
        onChange={e => {
          setBalance(e.target.value);
        }}
      />
      <input
        className="balance__submit balance-btn"
        type="button"
        value="Подтвердить"
        onClick={() => dispatch(balanceOperations.updateBalance(balance))}
      />
      {!balance && tooltipOpen && (
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
