import React from 'react';
import Form from '../common/Form';
import { authOperations } from '../redux/authorization';
import { connect } from 'react-redux';

const RegPage = ({ handleSubmit }) => {
  return (
    <div className="container__background">
      <Form
        initialState={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        btnText="Sign up"
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(authOperations.addUser(user)),
});

export default connect(null, mapDispatchToProps)(RegPage);
