import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';
import { format } from 'date-fns';

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateSuccess]: (_, { payload }) =>
      payload.transactions,
    [transactionsActions.getIncomeByDateSuccess]: (_, { payload }) =>
      payload.transactions,
  },
);

const initialDate = format(new Date(), 'yyyy-MM-dd');

const selectedDate = createReducer(initialDate, {
  [transactionsActions.setDate]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [transactionsActions.getExpenseByDateRequest]: () => true,
  [transactionsActions.getExpenseByDateSuccess]: () => false,
  [transactionsActions.getExpenseByDateError]: () => false,
  [transactionsActions.getIncomeByDateRequest]: () => true,
  [transactionsActions.getIncomeByDateSuccess]: () => false,
  [transactionsActions.getIncomeByDateError]: () => false,
  [transactionsActions.deleteTransactionRequest]: () => true,
  [transactionsActions.deleteTransactionSuccess]: () => false,
  [transactionsActions.deleteTransactionError]: () => false,
  // [transactionsActions.editContact.pending]: () => true,
  // [transactionsActions.editContact.fulfilled]: () => false,
  // [transactionsActions.editContact.rejected]: () => false,
});

export default combineReducers({
  transactions,
  selectedDate,
  isLoading,
});
