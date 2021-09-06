import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
export default function PublicRoute({
  children,
  restricted = false,
  ...routePorps
}) {
  const isLoggeIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggeIn && restricted;
  return (
    <Route {...routePorps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
