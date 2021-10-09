import axios from 'axios';

import reportActions from './report-actions';

const fetchContacts = () => async dispatch => {
  dispatch(reportActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(reportActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(reportActions.fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(reportActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(reportActions.addContactSuccess(data));
  } catch (error) {
    dispatch(reportActions.addContactError(error.message));
  }
};

const deleteTransaction = id => async dispatch => {
  dispatch(reportActions.deleteTransactionRequest());

  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch(reportActions.deleteTransactionSuccess(id));
  } catch (error) {
    dispatch(reportActions.deleteTransactionError(error.message));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteTransaction };
