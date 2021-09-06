import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './userMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from '../appBar/AuthNav';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        HomePage
      </NavLink>
      {isLoggedIn ? (
        <>
          <UserMenu />
          <NavLink
            to="/contacts"
            exact
            className="link"
            activeClassName="activeLink"
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
