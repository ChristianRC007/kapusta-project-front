import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateSuccess]: (_, { payload }) =>
      payload.transactions,
    [transactionsActions.getIncomeByDateSuccess]: (_, { payload }) =>
      payload.transactions,
  },
);

// const loading = createReducer(loadingState, {
//   [balanceActions.setLoading]: (_, { payload }) => payload,
// });

export default combineReducers({
  transactions,
  // selectedDate,
});
