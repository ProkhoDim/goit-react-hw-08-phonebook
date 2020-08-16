const getIsAuth = state => state.auth.isAuthenticated;

const currentUserName = state => state.auth.user.name;

export default { getIsAuth, currentUserName };
