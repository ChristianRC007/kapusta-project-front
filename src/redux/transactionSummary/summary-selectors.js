const getSummary = state => state.summary;
const getExpanseBySixMonth = state => getSummary(state).sixMonthsExpanse;

const getIncomeBySixMonth = state => getSummary(state).sixMonthsIncome;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSummary,
  getExpanseBySixMonth,
  getIncomeBySixMonth,
};
