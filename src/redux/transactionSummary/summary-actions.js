import { createAction } from '@reduxjs/toolkit';

const getIncomeSummaryRequest = createAction('income/summary/request');
const getIncomeSummarySuccess = createAction('income/summary/success');
const getIncomeSummaryError = createAction('income/summary/error');

const getExpanseSummaryRequest = createAction('expanse/summary/request');
const getExpanseSummarySuccess = createAction('expanse/summary/success');
const getExpanseSummaryError = createAction('expanse/summary/error');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIncomeSummaryRequest,
  getIncomeSummarySuccess,
  getIncomeSummaryError,
  getExpanseSummaryRequest,
  getExpanseSummarySuccess,
  getExpanseSummaryError,
};
