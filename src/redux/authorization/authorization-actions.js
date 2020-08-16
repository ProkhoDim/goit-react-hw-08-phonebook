import { createAction } from '@reduxjs/toolkit';

const registrationRequest = createAction('auth/registrationRequest');
const registrationSuccess = createAction('auth/registrationSuccess');
const registrationError = createAction('auth/registrationError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,

  loginRequest,
  loginSuccess,
  loginError,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,

  logoutRequest,
  logoutSuccess,
  logoutError,
};
