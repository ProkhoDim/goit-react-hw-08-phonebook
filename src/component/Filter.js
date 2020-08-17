import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../common/Input';

import * as actions from '../redux/contacts/contacts-actions';
import { contactsSelectors } from '../redux/contacts';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Input
        name="filter"
        text="find contacts by name"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
