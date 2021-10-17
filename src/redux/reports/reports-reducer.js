import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import reportsActions from './reports-actions';
import { setActive } from '../../services/setActive';

const reportsIncome = createReducer([], {
  [reportsActions.getIncomeDetailSuccess]: (state, { payload }) =>
    setActive(payload.incomeDetail),
  [reportsActions.setActiveIncome]: (_, { payload }) => payload,
});

const reportsExpense = createReducer([], {
  [reportsActions.getExpenseDetailSuccess]: (state, { payload }) =>
    setActive(payload.expenseDetail),

  [reportsActions.setActiveExpanse]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [reportsActions.getIncomeDetailRequest]: () => true,
  [reportsActions.getIncomeDetailSuccess]: () => false,
  [reportsActions.getIncomeDetailError]: () => false,
  [reportsActions.getExpenseDetailRequest]: () => true,
  [reportsActions.getExpenseDetailSuccess]: () => false,
  [reportsActions.getExpenseDetailError]: () => false,
});

const costs = createReducer(true, {
  [reportsActions.getCostsFalse]: () => false,
  [reportsActions.getCostsTrue]: () => true,
});

export default combineReducers({
  reportsIncome,
  reportsExpense,
  costs,
  isLoading,
});
