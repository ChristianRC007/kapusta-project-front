import { ReactComponent as DeleteButton } from '../../assets/img/delete-button.svg';
import { useDispatch } from 'react-redux';
import { reportOperations } from '../../redux/report';

const Transaction = ({ item, profit }) => {
  const dispatch = useDispatch();

  const currCategory = profit ? item.amount : -item.amount;
  const currClass = profit ? 'tableAmountIncome' : 'tableAmount';

  return (
    <tr className="tableTr">
      <td className="tableDate">{item.date}</td>
      <td className="tableDescription">{item.description}</td>
      <td className="tableCategory">Продукты{item.category}</td>
      <td className={currClass}>{`${currCategory} грн.`}</td>
      <td className="tableDelete">
        <button
          type="button"
          className="deleteBtn"
          onClick={() => dispatch(reportOperations.deleteTransaction(item._id))}
        >
          <DeleteButton />
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
