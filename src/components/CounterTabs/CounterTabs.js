import { useState } from 'react';
import InputContainer from '../../components/InputContainer';
import Summary from '../Summary';
import TransactionTable from '../TransactionTable';

const optionsExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спортб хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const optionsProfit = [
  { value: 'salary', label: 'Зарплата' },
  { value: 'additional', label: 'Доп. доход' },
];

const CounterTabs = () => {
  const [expense, setCosts] = useState(true);
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
            expense
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
      {expense ? (
        <div className="counter-tab-container">
          <InputContainer options={optionsExpense} />
          <div className="tables-wrapper">
            <TransactionTable />
            <Summary />
          </div>
        </div>
      ) : (
        <div className="counter-tab-container">
          <InputContainer options={optionsProfit} profit={profits} />
          <div className="tables-wrapper">
            <TransactionTable profit={profits} />
            <Summary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CounterTabs;
