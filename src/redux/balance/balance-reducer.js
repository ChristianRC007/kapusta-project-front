import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import balanceActions from './balance-actions';

const initialBalance = 0;

const current = createReducer(initialBalance, {
  [balanceActions.updateBalance]: (_, { payload }) => payload,
  [balanceActions.getBalance]: (_, { payload }) => payload,
});

const loadingState = 0;

const loading = createReducer(loadingState, {
  [balanceActions.setLoading]: (_, { payload }) => payload,
});

export default combineReducers({
  current,
  loading,
});
