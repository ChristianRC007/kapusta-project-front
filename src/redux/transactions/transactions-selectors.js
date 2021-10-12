const currentDate = state => state.transactions.selectedDate.date;
const getTransactions = state => state.transactions.transactions;
const getLast = state => state.transactions.items;

const transactionsSelectors = {
  currentDate,
  getTransactions,
  getLast,
};

export default transactionsSelectors;
