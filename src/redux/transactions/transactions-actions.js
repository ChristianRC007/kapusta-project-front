import { createAction } from '@reduxjs/toolkit';

const setDate = createAction('set-date');

const addIncomeRequest = createAction('transactions/addIncomeRequest');
const addIncomeSuccess = createAction('transactions/addIncomeSuccess');
const addIncomeError = createAction('transactions/addIncomeError');

const addExpenseRequest = createAction('transactions/addExpenseRequest');
const addExpenseSuccess = createAction('transactions/addExpenseSuccess');
const addExpenseError = createAction('transactions/addExpenseError');

const getExpenseByDateRequest = createAction(
  'transactions/getExpenseByDateRequest',
);
const getExpenseByDateSuccess = createAction(
  'transactions/getExpenseByDateSuccess',
);
const getExpenseByDateError = createAction(
  'transactions/getExpenseByDateError',
);

const transactionsActions = {
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  getExpenseByDateRequest,
  getExpenseByDateSuccess,
  getExpenseByDateError,
  setDate,
};

export default transactionsActions;
