import { useState } from 'react';

const CounterTabs = () => {
  const [costs, setCosts] = useState(true);
  const [profits, setProfits] = useState(false);

  const clickCosts = () => {
    setProfits(false);
    setCosts(true);
  };

  const clickProfits = () => {
    setProfits(true);
    setCosts(false);
  };

  return (
    <div className="counter-tabs-wrapper">
      <div>
        <button
          className={
            costs
              ? 'counter-tab-header-buttons counter-tab-active'
              : 'counter-tab-header-buttons'
          }
          onClick={clickCosts}
        >
          Расход
        </button>
        <button
          className={
            profits
              ? 'counter-tab-header-buttons counter-tab-active'
              : 'counter-tab-header-buttons'
          }
          type="button"
          onClick={clickProfits}
        >
          Доход
        </button>
      </div>
      {costs ? (
        <div className="counter-tab-container">Costs</div>
      ) : (
        <div className="counter-tab-container">Profits</div>
      )}
    </div>
  );
};

export default CounterTabs;