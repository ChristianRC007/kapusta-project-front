import { ReactComponent as DeleteButton } from '../../assets/img/delete-button.svg';
import { format } from 'date-fns';

const Transaction = ({ item, profit, onDelete }) => {
  const currCategory = profit ? item.amount : -item.amount;
  const currClass = profit ? 'tableAmountIncome' : 'tableAmount';

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
          onClick={() => onDelete(item._id)}
        >
          <DeleteButton />
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
