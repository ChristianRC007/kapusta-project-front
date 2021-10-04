import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import reportActions from './report-actions';

const items = createReducer([], {
  [reportActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [reportActions.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [reportActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [reportActions.fetchContactsRequest]: () => true,
  [reportActions.fetchContactsSuccess]: () => false,
  [reportActions.fetchContactsError]: () => false,

  [reportActions.addContactRequest]: () => true,
  [reportActions.addContactSuccess]: () => false,
  [reportActions.addContactError]: () => false,

  [reportActions.deleteContactRequest]: () => true,
  [reportActions.deleteContactSuccess]: () => false,
  [reportActions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [reportActions.changeFilter]: (_, { payload }) => payload,
});

const modal = createReducer(false, {
  [reportActions.setModal]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [reportActions.fetchContactsError]: (_, { payload }) => payload,
  [reportActions.addContactError]: (_, { payload }) => payload,
  [reportActions.deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
  modal,
});
