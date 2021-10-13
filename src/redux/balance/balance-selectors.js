const balanceCurrent = state => state.balance.current;
const balanceLoading = state => state.balance.loading;
const currentExpenses = state => state.balance.currentExpenses;
const currentIncomses = state => state.balance.currentIncomses;

const balanceSelectors = {
  balanceCurrent,
  balanceLoading,
  currentExpenses,
  currentIncomses,
};

export default balanceSelectors;
