const getSummary = state => state.summary;
const getExpenseBySixMonth = state => getSummary(state).sixMonthsExpense;

const getIncomeBySixMonth = state => getSummary(state).sixMonthsIncome;
const getSummaryIsLoading = state => state.summary.summaryIsLoading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSummary,
  getExpenseBySixMonth,
  getIncomeBySixMonth,
  getSummaryIsLoading,
};
