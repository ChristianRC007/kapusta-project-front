import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  setModal,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const modal = createReducer(false, {
  [setModal]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
  modal,
});
