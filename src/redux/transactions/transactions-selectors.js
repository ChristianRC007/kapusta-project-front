const currentDate = state => state.transactions.selectedDate.date;
const getTransactions = state => state.transactions.transactions;

const transactionsSelectors = {
  currentDate,
  getTransactions
};

export default transactionsSelectors;
