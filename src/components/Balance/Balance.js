import React, { useState } from 'react';

const Balance = () => {
  const balance = 0;
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const removeTooltip = () => {
    setTooltipOpen(false);
    console.log(tooltipOpen);
  };

  return (
    <div className="balance">
      <p className="balance__title">Баланс:</p>
      <input className="balance__input" type="text" placeholder="00.00 UAH" />
      <input
        className="balance__submit balance-btn"
        type="button"
        value="Подтвердить"
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
