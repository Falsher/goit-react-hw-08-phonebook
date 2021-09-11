import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/pages/PrivateRoute';
import PublicRoute from './components/pages/PublicRoute';
import authOperation from 'redux/auth/auth-operation';
import AppBar from './components/appBar/appBar';
import authSelectors from 'redux/auth/auth-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePages = lazy(() => import('./components/pages/homeP'));
const Register = lazy(() => import('./components/pages/register'));
const Login = lazy(() => import('./components/pages/login'));
const Contacts = lazy(() => import('./components/pages/contactsPage'));

function App() {
  const dispatch = useDispatch();
  const isFetchingLoad = useSelector(authSelectors.getIsFetchingLoad);
  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div class="card">
      {isFetchingLoad ? (
        <h1>какая-то страница</h1>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomePages />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <Register />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <Login />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
