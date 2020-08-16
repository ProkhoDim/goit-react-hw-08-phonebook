import axios from 'axios';
import authAction from './authorization-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addUser = ({ name, email, password }) => async dispatch => {
  try {
    dispatch(authAction.registrationRequest());
    console.log(name, email, password);
    const { data } = await axios.post('users/signup', {
      name,
      email,
      password,
    });
    token.set(data.token);
    dispatch(authAction.registrationSuccess(data));
  } catch (error) {
    dispatch(authAction.registrationError(error.message));
  }
};

const loginUser = ({ email, password }) => async dispatch => {
  try {
    dispatch(authAction.loginRequest());
    console.log(email, password);
    const { data } = await axios.post('users/login', {
      email,
      password,
    });
    token.set(data.token);
    dispatch(authAction.loginSuccess(data));
  } catch (error) {
    dispatch(authAction.loginError(error.message));
  }
};

const logoutUser = () => async dispatch => {
  try {
    dispatch(authAction.logoutRequest());

    await axios.post('users/logout');
    token.unset();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  try {
    dispatch(authAction.getCurrentUserRequest());
    const { data } = await axios.get('users/current');
    dispatch(authAction.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authAction.getCurrentUserError());
  }
};

export default { addUser, loginUser, logoutUser, getCurrentUser };
