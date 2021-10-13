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

const getIncomeByDateRequest = createAction(
  'transactions/getIncomeByDateRequest',
);
const getIncomeByDateSuccess = createAction(
  'transactions/getIncomeByDateSuccess',
);
const getIncomeByDateError = createAction('transactions/getIncomeByDateError');

const getLastRequest = createAction('transactions/getLastRequest');
const getLastSuccess = createAction('transactions/getLastSuccess');
const getLastError = createAction('transactions/getLastError');

const deleteTransactionRequest = createAction('transactions/deleteRequest');
const deleteTransactionSuccess = createAction('transactions/deleteSuccess');
const deleteTransactionError = createAction('transactions/deleteError');

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
  getIncomeByDateRequest,
  getIncomeByDateSuccess,
  getIncomeByDateError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  setDate,
  getLastRequest,
  getLastSuccess,
  getLastError,
};

export default transactionsActions;
