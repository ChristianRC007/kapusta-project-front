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

const deleteContact = id => async dispatch => {
  dispatch(reportActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(reportActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(reportActions.deleteContactError(error.message));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
