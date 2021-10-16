const getIncomeDetail = state => state.reports.reportsIncome;
const getExpenseDetail = state => state.reports.reportsExpense;
const getIsLoading = state => state.reports.isLoading;
const getCosts = state => state.reports.costs;

const transactionsSelectors = {
  getIncomeDetail,
  getExpenseDetail,
  getIsLoading,
  getCosts,
};

export default transactionsSelectors;
