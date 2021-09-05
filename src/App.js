import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from './components/appBar/appBar';
const HomePages = lazy(() => import('./components/pages/homeP'));
const Register = lazy(() => import('./components/pages/register'));
const Login = lazy(() => import('./components/pages/login'));
const Contacts = lazy(() => import('./components/pages/contactsPage'));

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePages />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Contacts">
            <Contacts />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
