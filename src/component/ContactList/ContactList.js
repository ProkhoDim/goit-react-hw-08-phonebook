import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ContactList.module.css';

import operations from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../redux/contacts';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactItem_info}>
            {name}: <span className={styles.contactText}>{number}</span>
          </p>
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.contactsFilter(state),
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: contactId => dispatch(operations.deleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
