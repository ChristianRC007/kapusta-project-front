const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail };
