import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import Transaction from './Transaction';

const TransactionTable = ({ profit, transactions, onDelete }) => {
  const isLoading = useSelector(transactionsSelectors.getIsLoading);
  return (
    <div className="tableDeskWrapper">
      <table className="table">
        <thead className="tableHead">
          <tr className="tableHeadTr">
            <th className="tableTransThDate">Дата</th>
            <th className="tableTransThDescr">Описание</th>
            <th className="tableTransThCategory">Категория</th>
            <th className="tableTransThAmount">Сумма</th>
          </tr>
        </thead>

        <tbody className="tableBody">
          {isLoading ? (
            <tr className="tableTr">
              <td>
                <span>Loading</span>
              </td>
            </tr>
          ) : (
            transactions.length > 0 &&
            transactions.map(item => (
              <Transaction
                key={item._id}
                item={item}
                profit={profit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
