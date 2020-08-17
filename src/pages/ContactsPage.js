import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ContactForm, ContactList, Filter } from '../component';
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import Loader from 'react-loader-spinner';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contactList, filter, isLoading } = this.props;
    return (
      <>
        <section className="ContactSection">
          <h2>Phonebook</h2>
          <ContactForm />
        </section>
        <section className="ContactSection">
          {contactList.length > 0 && (
            <h2 style={{ position: 'relative' }}>
              Contacts
              {isLoading && (
                <span style={{ position: 'absolute' }}>
                  <Loader
                    type="ThreeDots"
                    color="#6d6d6d"
                    height={'1rem'}
                    width={60}
                  />
                </span>
              )}
            </h2>
          )}
          {(contactList.length > 3 || filter) && <Filter />}
          {contactList.length > 0 && <ContactList />}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contactList: contactsSelectors.getItems(state),
  isLoading: contactsSelectors.getIsLoading(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  getContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
