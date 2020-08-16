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

const getContacts = () => async dispatch => {
  try {
    dispatch(getContactRequest());
    const { data } = await axios.get('contacts');
    dispatch(getContactSuccess(data));
  } catch (error) {
    dispatch(getContactError(error));
  }
};

const addContact = contact => async dispatch => {
  try {
    dispatch(addContactRequest());
    const { data } = await axios.post('contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  try {
    dispatch(deleteContactRequest());
    await axios.delete(`contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export default { getContacts, addContact, deleteContact };
