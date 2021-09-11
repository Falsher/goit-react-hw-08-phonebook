import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './userMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from '../appBar/AuthNav';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav class="alert alert-primary">
      <NavLink
        to="/"
        exact
        className="breadcrumb-item"
        activeClassName="active"
      >
        HomePage
      </NavLink>
      {isLoggedIn ? (
        <>
          <UserMenu />
          <NavLink
            to="/contacts"
            exact
            className="breadcrumb-item"
            activeClassName="active"
          >
            Contacts
          </NavLink>
        </>
      ) : (
        <AuthNav />
      )}
    </nav>
  );
}
