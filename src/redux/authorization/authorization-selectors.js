const getIsAuth = state => state.auth.isAuthenticated;

const currentUserEmail = state => state.auth.user.email;

export default { getIsAuth, currentUserEmail };
