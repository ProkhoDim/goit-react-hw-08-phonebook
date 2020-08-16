import React from 'react';
import Form from '../../common/Form';
import { authOperations } from '../../redux/authorization';
import { connect } from 'react-redux';

const LoginPage = ({ handleSubmit }) => {
  return (
    <div>
      <Form
        initialState={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        btnText="Login"
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(authOperations.loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
