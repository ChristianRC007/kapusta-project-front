import { createAction } from '@reduxjs/toolkit';

export const addIncomeRequest = createAction('contacts/addIncomeRequest');
export const addIncomeSuccess = createAction('contacts/addIncomeSuccess');
export const addIncomeError = createAction('contacts/addIncomeError');

export const addExpenseRequest = createAction('contacts/addExpenseRequest');
export const addExpenseSuccess = createAction('contacts/addExpenseSuccess');
export const addExpenseError = createAction('contacts/addExpenseError');
