import React, { Component } from 'react';
import { connect } from 'react-redux';
import './theme/global.css';

import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';

import contactsOperations from './redux/contacts/contacts-operations';
import { contactsSelectors } from './redux/contacts';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contactList, isLoading, filter } = this.props;
    return (
      <div className="Container">
        <section className="ContactSection">
          <h2>Phonebook</h2>
          <ContactForm />
        </section>
        <section>
          {contactList.length > 0 && (
            <h2>
              Contacts
              {isLoading && <span> Loading...</span>}
            </h2>
          )}
          {(contactList.length > 3 || filter) && <Filter />}
          {contactList.length > 0 && <ContactList />}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contactList: contactsSelectors.getItems(state),
  isLoading: contactsSelectors.getIsLoading(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
