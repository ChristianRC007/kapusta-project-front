import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';

const items = createReducer([], {
  [transactionsActions.getLastSuccess]: (state, { payload }) => payload,
});

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateSuccess]: (_, { payload }) =>
      payload.transactions,
    [transactionsActions.getIncomeByDateSuccess]: (_, { payload }) =>
      payload.transactions,
    [transactionsActions.getLastSuccess]: (_, { payload }) =>
      payload.transactions,
  },
);

// const loading = createReducer(loadingState, {
//   [balanceActions.setLoading]: (_, { payload }) => payload,
// });

export default combineReducers({
  transactions,
  items,
  // selectedDate,
});
