import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateRequest]: (_, { payload }) => payload,
    // [balanceActions.getBalance]: (_, { payload }) => payload,
  },
);

const selectedDate = createReducer(
  { date: Date.now() },
  {
    [transactionsActions.setDate]: (_, { payload }) => payload,
    // [balanceActions.getBalance]: (_, { payload }) => payload,
  },
);

// const loading = createReducer(loadingState, {
//   [balanceActions.setLoading]: (_, { payload }) => payload,
// });

export default combineReducers({
  transactions,
  selectedDate,
});
