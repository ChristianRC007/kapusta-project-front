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
      <p className="balance__title">Balance</p>
      <input className="balance__input" type="text" placeholder="0.00 UAH" />
      <input className="balance__submit" type="button" value="Подтвердить" />
      {!balance && tooltipOpen && (
        <div className="balance__tooltip" onClick={removeTooltip}>
          <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
          <p>Ты не можешь тратить деньги пока их у тебя нет :) </p>
        </div>
      )}
    </div>
  );
};

export default Balance;
