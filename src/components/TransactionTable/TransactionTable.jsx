import Transaction from './Transaction';

const arr = [
  {
    id: '1',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 2000,
  },
  {
    id: '2',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 20,
  },
  {
    id: '3',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Доход',
    amount: 300,
  },
  {
    id: '4',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 250,
  },
  {
    id: '5',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 2004,
  },
  {
    id: '6',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 240,
  },
  {
    id: '7',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Доход',
    amount: 204,
  },
  {
    id: '8',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 2000,
  },
  {
    id: '9',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Доход',
    amount: 2000,
  },
  {
    id: '10',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 207,
  },
  {
    id: '11',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Росход',
    amount: 24500,
  },
  {
    id: '12',
    date: '22.09.21',
    description: 'lskdj slkdj lskdjf lkdj',
    category: 'Доход',
    amount: 20,
  },
];

const TransactionTable = ({ profit }) => {
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
          {arr.map(item => (
            <Transaction key={item.id} item={item} profit={profit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
