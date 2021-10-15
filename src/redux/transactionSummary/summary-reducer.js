import { createReducer, combineReducers } from '@reduxjs/toolkit';
import summaryActions from './summary-actions';
import { getFormattedMonth } from './getFormattedMonth';

const sixMonthsIncome = createReducer([], {
  [summaryActions.getIncomeSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.incomeByMonth),
});

const sixMonthsExpanse = createReducer([], {
  [summaryActions.getExpanseSummarySuccess]: (_, { payload }) =>
    getFormattedMonth(payload.expenseByMonth),
});

export default combineReducers({
  sixMonthsIncome,
  sixMonthsExpanse,
});
