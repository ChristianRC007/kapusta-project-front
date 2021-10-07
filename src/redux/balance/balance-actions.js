import { createAction } from '@reduxjs/toolkit';

const updateBalance = createAction('balance/updateBalance');

const balanceActions = {
  updateBalance,
};

export default balanceActions;
