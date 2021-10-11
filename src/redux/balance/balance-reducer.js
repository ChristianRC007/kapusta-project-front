import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import balanceActions from './balance-actions';

const initialBalance = 0;
const initialCurrentExpenses = 0;
const initialCurrentIncomes = 0;
const loadingState = 0;

const current = createReducer(initialBalance, {
  [balanceActions.updateBalance]: (_, { payload }) => payload,
  [balanceActions.getBalance]: (_, { payload }) => payload,
});

const currentExpenses = createReducer(initialCurrentExpenses, {
  [balanceActions.updateCurrentExpenses]: (_, { payload }) => payload,
});

const currentIncomses = createReducer(initialCurrentIncomes, {
  [balanceActions.updateCurrentIncomes]: (_, { payload }) => payload,
});

const loading = createReducer(loadingState, {
  [balanceActions.setLoading]: (_, { payload }) => payload,
});

export default combineReducers({
  current,
  loading,
  currentExpenses,
  currentIncomses,
});
