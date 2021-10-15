import { createAction } from '@reduxjs/toolkit';

const getIncomeDetailRequest = createAction('reports/getIncomeDetailRequest');
const getIncomeDetailSuccess = createAction('reports/getIncomeDetailSuccess');
const getIncomeDetailError = createAction('reports/getIncomeDetailError');

const getExpenseDetailRequest = createAction('reports/getExpenseDetailRequest');
const getExpenseDetailSuccess = createAction('reports/getExpenseDetailSuccess');
const getExpenseDetailError = createAction('reports/getExpenseDetailError');

const reportsActions = {
  getIncomeDetailRequest,
  getIncomeDetailSuccess,
  getIncomeDetailError,
  getExpenseDetailRequest,
  getExpenseDetailSuccess,
  getExpenseDetailError,
};

export default reportsActions;
