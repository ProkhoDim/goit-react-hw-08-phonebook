import React from 'react';
import Form from '../../common/Form';
import authorizationOperations from '../../redux/authorization/authorization-operations';
import { connect } from 'react-redux';

const RegPage = ({ handleSubmit }) => {
  return (
    <>
      <Form
        initialState={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        btnText="Sign up"
      />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(authorizationOperations.addUser(user)),
});

export default connect(null, mapDispatchToProps)(RegPage);
