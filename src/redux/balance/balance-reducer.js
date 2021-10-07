import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import balanceActions from './balance-actions';

const initialBalance = 0;

const current = createReducer(initialBalance, {
  [balanceActions.updateBalance]: (_, { payload }) => payload,
});

export default combineReducers({
  current,
});
