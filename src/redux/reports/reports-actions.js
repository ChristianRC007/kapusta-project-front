import { createAction } from '@reduxjs/toolkit';

const getCostsTrue = createAction('reports/getCostsTrue');
const getCostsFalse = createAction('reports/getCostsFalse');

const getIncomeDetailRequest = createAction('reports/getIncomeDetailRequest');
const getIncomeDetailSuccess = createAction('reports/getIncomeDetailSuccess');
const getIncomeDetailError = createAction('reports/getIncomeDetailError');

const getExpenseDetailRequest = createAction('reports/getExpenseDetailRequest');
const getExpenseDetailSuccess = createAction('reports/getExpenseDetailSuccess');
const getExpenseDetailError = createAction('reports/getExpenseDetailError');

const setActiveExpanse = createAction('reports/setActiveExpanse');
const setActiveIncome = createAction('reports/setActiveIncome');

const reportsActions = {
  getIncomeDetailRequest,
  getIncomeDetailSuccess,
  getIncomeDetailError,
  getExpenseDetailRequest,
  getExpenseDetailSuccess,
  getExpenseDetailError,
  getCostsTrue,
  getCostsFalse,
  setActiveExpanse,
  setActiveIncome,
};

export default reportsActions;
