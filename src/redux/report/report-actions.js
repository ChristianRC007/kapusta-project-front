import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteTransactionRequest = createAction(
  'Transactions/deleteTransactionRequest',
);
const deleteTransactionSuccess = createAction(
  'Transactions/deleteTransactionSuccess',
);
const deleteTransactionError = createAction(
  'Transactions/deleteTransactionError',
);

const changeFilter = createAction('contacts/changeFilter');

const setModal = createAction('contacts/setModal');

// eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  changeFilter,
  setModal,
};
