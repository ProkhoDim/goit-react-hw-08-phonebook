import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './RegForm.module.css';

import Input from '../../common/Input';

import operations from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../redux/contacts';

class RegForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleClick = e => {
    e.preventDefault();

    const { name, password, email } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ name, password, email });
    this.formReset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleClick} className={styles.contactForm}>
        {Object.keys(this.state).map(item => (
          <div key={item}>
            <Input
              name={item}
              value={this.state[item]}
              text={item}
              type={item}
              onChange={this.handleChange}
            />
          </div>
        ))}
        <button type="submit" className={styles.formBtn}>
          Submit
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
