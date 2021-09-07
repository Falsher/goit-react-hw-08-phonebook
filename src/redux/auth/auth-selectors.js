export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;
const getIsFetchingLoad = state => state.auth.isFetchingLoad;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingLoad,
};
export default authSelectors;
