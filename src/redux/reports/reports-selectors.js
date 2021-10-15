const getIncomeDetail = state => state.reports.reportsIncome;
const getExpenseDetail = state => state.reports.reportsExpense;
const getIsLoading = state => state.reports.isLoading;

const transactionsSelectors = {
  getIncomeDetail,
  getExpenseDetail,
  getIsLoading,
};

export default transactionsSelectors;
