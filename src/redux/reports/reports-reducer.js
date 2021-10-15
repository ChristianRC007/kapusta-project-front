import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import reportsActions from './reports-actions';

const reportsIncome = createReducer([], {
  [reportsActions.getIncomeDetailSuccess]: (state, { payload }) =>
    payload.incomeDetail,
});
const reportsExpense = createReducer([], {
  [reportsActions.getExpenseDetailSuccess]: (state, { payload }) =>
    payload.expenseDetail,
});

const isLoading = createReducer(false, {
  [reportsActions.getIncomeDetailRequest]: () => true,
  [reportsActions.getIncomeDetailSuccess]: () => false,
  [reportsActions.getIncomeDetailError]: () => false,
  [reportsActions.getExpenseDetailRequest]: () => true,
  [reportsActions.getExpenseDetailSuccess]: () => false,
  [reportsActions.getExpenseDetailError]: () => false,
});

export default combineReducers({
  reportsIncome,
  reportsExpense,
  isLoading,
});
