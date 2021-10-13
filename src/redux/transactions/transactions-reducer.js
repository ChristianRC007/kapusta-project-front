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
const getLast = createReducer([], {
  [transactionsActions.getLastSuccess]: (state, { payload }) =>
    payload.transactions,
});

const initialDate = format(new Date(), 'yyyy-MM-dd');

const selectedDate = createReducer(initialDate, {
  [transactionsActions.setDate]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [transactionsActions.addExpenseRequest]: () => true,
  [transactionsActions.addExpenseSuccess]: () => false,
  [transactionsActions.addExpenseError]: () => false,
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.getExpenseByDateRequest]: () => true,
  [transactionsActions.getExpenseByDateSuccess]: () => false,
  [transactionsActions.getExpenseByDateError]: () => false,
  [transactionsActions.getIncomeByDateRequest]: () => true,
  [transactionsActions.getIncomeByDateSuccess]: () => false,
  [transactionsActions.getIncomeByDateError]: () => false,
  [transactionsActions.getLastRequest]: () => true,
  [transactionsActions.getLastSuccess]: () => false,
  [transactionsActions.getLastError]: () => false,
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
  getLast,
});
