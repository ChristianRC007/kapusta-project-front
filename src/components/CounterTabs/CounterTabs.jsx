import { useEffect, useState } from 'react';
import InputContainer from '../InputContainer';
import Summary from '../Summary';
import TransactionTable from '../TransactionTable';
import { useDispatch, useSelector } from 'react-redux';
import balanceOperations from '../../redux/balance/balance-operations';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import { transactionsSelectors } from '../../redux/transactions';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const optionsExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const optionsProfit = [
  { value: 'salary', label: 'ЗП' },
  { value: 'additional', label: 'Доп. доход' },
];

const CounterTabs = () => {
  const dispatch = useDispatch();
  const [expense, setCosts] = useState(true);
  const [profits, setProfits] = useState(false);

  let isDesktopWide = useMediaQuery('(min-width: 1060px)');
  let isTabletWide = useMediaQuery(
    '(min-width: 768px) and (max-width: 1060px)',
  );

  useEffect(() => {
    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(transactionsOperations.getExpenseByDate(date));
  }, [dispatch]);

  const transactions = useSelector(transactionsSelectors.getTransactions);
  // const incomeTransactions = useSelector(transactionsSelectors.getTransactions);

  const clickCosts = () => {
    setProfits(false);
    setCosts(true);
  };

  const clickProfits = () => {
    setProfits(true);
    setCosts(false);
    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(transactionsOperations.getIncomeByDate(date));
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
      dispatch(transactionsOperations.addIncome(data, onSuccess, onError));
      dispatch(transactionsOperations.getIncomeByDate(data.date));
    }
    if (expense) {
      dispatch(transactionsOperations.addExpense(data, onSuccess, onError));
      dispatch(transactionsOperations.getExpenseByDate(data.date));
    }
  };

  return (
    <div>
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
              <TransactionTable transactions={transactions} />
              {isDesktopWide && <Summary />}
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
              <TransactionTable profit={profits} transactions={transactions} />
              {isDesktopWide && <Summary />}
            </div>
          </div>
        )}
      </div>
      {isTabletWide && <Summary />}
    </div>
  );
};

export default CounterTabs;
