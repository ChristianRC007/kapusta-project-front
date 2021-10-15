import { createReducer, combineReducers } from '@reduxjs/toolkit';
import summaryActions from './summary-actions';
import { getFormattedMonth } from './getFormattedMonth';

const sixMonthsIncome = createReducer([], {
  [summaryActions.getIncomeSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.incomeByMonth),
});

const sixMonthsExpense = createReducer([], {
  [summaryActions.getExpanseSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.expenseByMonth),
});

const summaryIsLoading = createReducer([], {
  [summaryActions.getIncomeSummaryRequest]: () => true,
  [summaryActions.getIncomeSummarySuccess]: () => false,
  [summaryActions.getIncomeSummaryError]: () => false,
  [summaryActions.getExpanseSummaryRequest]: () => true,
  [summaryActions.getExpanseSummarySuccess]: () => false,
  [summaryActions.getExpanseSummaryError]: () => false,
});

export default combineReducers({
  sixMonthsIncome,
  sixMonthsExpense,
  summaryIsLoading,
});
