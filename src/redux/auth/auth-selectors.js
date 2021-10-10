const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.user?.name;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserName };
