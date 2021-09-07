export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;
export const getIsFetchingLoad = state => state.auth.isFetchingLoad;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingLoad,
};
export default authSelectors;
