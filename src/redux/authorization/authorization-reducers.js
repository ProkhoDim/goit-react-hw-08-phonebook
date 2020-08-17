import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './authorization-actions';

const user = createReducer(
  { name: '', email: '' },
  {
    [authAction.registrationSuccess]: (_, { payload }) => payload,
    [authAction.loginSuccess]: (_, { payload }) => payload.user,
    [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
  },
);

const token = createReducer('', {
  [authAction.registrationSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const error = createReducer('', {
  [authAction.registrationError]: (_, { payload }) => payload,
  [authAction.loginError]: (_, { payload }) => payload,
  [authAction.logoutError]: (_, { payload }) => payload,
  [authAction.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authAction.registrationSuccess]: () => true,
  [authAction.loginSuccess]: () => true,
  [authAction.getCurrentUserSuccess]: () => true,
  [authAction.logoutSuccess]: () => false,
  [authAction.registrationError]: () => false,
  [authAction.loginError]: () => false,
  [authAction.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
