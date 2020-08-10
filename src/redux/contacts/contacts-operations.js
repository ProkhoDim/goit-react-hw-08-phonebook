import axios from 'axios';
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3030';

const getContacts = () => async dispatch => {
  try {
    dispatch(getContactRequest());
    const { data } = await axios.get('/contacts');
    return dispatch(getContactSuccess(data));
  } catch (error) {
    return dispatch(getContactError(error));
  }
};

const addContact = contact => async dispatch => {
  try {
    dispatch(addContactRequest());
    const { data } = await axios.post('/contacts', contact);
    return dispatch(addContactSuccess(data));
  } catch (error) {
    return dispatch(addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  try {
    dispatch(deleteContactRequest());
    await axios.delete(`/contacts/${contactId}`);
    return dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    return dispatch(deleteContactError(error));
  }
};

export default { getContacts, addContact, deleteContact };
