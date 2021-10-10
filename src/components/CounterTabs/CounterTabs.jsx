import { useState } from 'react';
import InputContainer from '../InputContainer';
import Summary from '../Summary';
import TransactionTable from '../TransactionTable';
import { useDispatch } from 'react-redux';
import counterOperations from '../../redux/transactions/transactions-operations';
import balanceOperations from '../../redux/balance/balance-operations';
import { toast } from 'react-toastify';

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
  const dispatch = useDispatch();
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

  const onSuccess = () => {
    toast.success('Transaction successаully added.');
    dispatch(balanceOperations.getBalance());
  };

  const onError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  const handleSubmit = data => {
    if (profits) {
      dispatch(counterOperations.addIncome(data, onSuccess, onError));
    } else {
      dispatch(counterOperations.addExpense(data, onSuccess, onError));
    }
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
          <InputContainer options={optionsExpense} onSubmit={handleSubmit} />
          <div className="tables-wrapper">
            <TransactionTable />
            <Summary />
          </div>
        </div>
      ) : (
        <div className="counter-tab-container">
          <InputContainer
            options={optionsProfit}
            profit={profits}
            onSubmit={handleSubmit}
          />
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
