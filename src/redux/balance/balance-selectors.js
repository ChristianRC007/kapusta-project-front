const balanceCurrent = state => state.balance.current;
const balanceLoading = state => state.balance.loading;

const balanceSelectors = {
  balanceCurrent,
  balanceLoading,
};

export default balanceSelectors;
