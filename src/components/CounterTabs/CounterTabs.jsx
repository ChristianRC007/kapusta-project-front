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
  const selectedDate = useSelector(transactionsSelectors.currentDate);
  const transactions = useSelector(transactionsSelectors.getTransactions);

  let isDesktopWide = useMediaQuery('(min-width: 1060px)');
  let isTabletWide = useMediaQuery(
    '(min-width: 768px) and (max-width: 1060px)',
  );

  useEffect(() => {
    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(transactionsOperations.getExpenseByDate(date));
  }, [dispatch]);

  const clickCosts = () => {
    setProfits(false);
    setCosts(true);
  };

  const clickProfits = () => {
    if (profits) return;
    setProfits(true);
    setCosts(false);
    const date = format(new Date(), 'yyyy-MM-dd');
    dispatch(transactionsOperations.getIncomeByDate(date));
  };

  const onSuccess = () => {
    toast.success('Transaction successfully added.');
    dispatch(balanceOperations.getBalance());
    if (profits) {
      dispatch(transactionsOperations.getIncomeByDate(selectedDate));
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate(selectedDate));
    }
  };

  const onError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  const handleSubmit = data => {
    if (profits) {
      dispatch(transactionsOperations.addIncome(data, onSuccess, onError));
    }
    if (expense) {
      dispatch(transactionsOperations.addExpense(data, onSuccess, onError));
    }
  };

  const onDeleteTransaction = id => {
    dispatch(
      transactionsOperations.deleteTransaction(
        id,
        onDeleteTransactionSuccess,
        onDeleteTransactionError,
      ),
    );
  };

  const onDeleteTransactionSuccess = () => {
    toast.success('Transaction has been deleted.');
    dispatch(balanceOperations.getBalance());
    if (profits) {
      dispatch(transactionsOperations.getIncomeByDate(selectedDate));
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate(selectedDate));
    }
  };

  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
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
              <TransactionTable
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
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
              <TransactionTable
                profit={profits}
                transactions={transactions}
                onDelete={onDeleteTransaction}
              />
              {isDesktopWide && <Summary profits={profits} />}
            </div>
          </div>
        )}
      </div>
      {isTabletWide && <Summary />}
    </div>
  );
};

export default CounterTabs;
