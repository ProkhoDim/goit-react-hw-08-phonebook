import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';

import Input from '../../common/Input';

import operations from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../redux/contacts';

const errorNotification = (text, closeDelay = 1500) =>
  toast.error(text, {
    position: 'top-right',
    autoClose: closeDelay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const normilizedNumber = number => number.split(/\D/).join('');

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContactClick = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contactList, onSubmit } = this.props;

    if (!name || !number) {
      errorNotification(`Please, enter name and number!`);
      return;
    }

    if (!this.isContactExist(contactList, name)) {
      onSubmit({ name, number });
      this.formReset();
    }
  };

  handleChange = ({ target: { name, value } }) => {
    name !== 'number'
      ? this.setState({ [name]: value })
      : this.setState({ [name]: normilizedNumber(value) });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  isContactExist = (contacts, submitName) => {
    const isNameInContacts = contacts.some(({ name }) => submitName === name);

    if (!isNameInContacts) return false;

    errorNotification(`${submitName} is already in contacts`);
    return true;
  };

  render() {
    return (
      <form onSubmit={this.addContactClick} className={styles.contactForm}>
        {Object.keys(this.state).map(item => (
          <div key={item}>
            <Input
              name={item}
              value={this.state[item]}
              text={item}
              onChange={this.handleChange}
            />
          </div>
        ))}
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
        <ToastContainer />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contactList: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(operations.addContact(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
