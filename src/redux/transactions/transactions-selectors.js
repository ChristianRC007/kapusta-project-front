const currentDate = state => state.transactions.selectedDate;
const getTransactions = state => state.transactions.transactions;
const getIsLoading = state => state.transactions.isLoading;

const transactionsSelectors = {
  currentDate,
  getTransactions,
  getIsLoading,
};

export default transactionsSelectors;
