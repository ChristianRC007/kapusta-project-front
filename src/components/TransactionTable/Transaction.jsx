import { useEffect } from 'react';
import { ReactComponent as DeleteButton } from '../../assets/img/delete-button.svg';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
import { format } from 'date-fns';

const Transaction = ({ item, profit }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profit) {
      const date = format(new Date(), 'yyyy-MM-dd');
      dispatch(transactionsOperations.getExpenseByDate(date));
    }
  }, [dispatch, profit]);

  const currCategory = profit ? item.amount : -item.amount;
  const currClass = profit ? 'tableAmountIncome' : 'tableAmount';

  const hanldeClick = id => {
    dispatch(transactionsOperations.deleteTransaction(id));
  };

  return (
    <tr className="tableTr">
      <td className="tableDate">{format(new Date(item.date), 'dd.MM.yyyy')}</td>
      <td className="tableDescription">{item.description}</td>
      <td className="tableCategory">{item.category}</td>
      <td className={currClass}>{`${currCategory.toFixed(2)} грн.`}</td>
      <td className="tableDelete">
        <button
          type="button"
          className="deleteBtn"
          onClick={() => hanldeClick(item._id)}
        >
          <DeleteButton />
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
