import { createAction } from '@reduxjs/toolkit';

const updateBalance = createAction('balance/updateBalance');
const getBalance = createAction('balance/getBalance');
const setLoading = createAction('balance/setLoading');

const balanceActions = {
  updateBalance,
  getBalance,
  setLoading,
};

export default balanceActions;
