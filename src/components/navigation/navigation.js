import { NavLink } from 'react-router-dom';
import '../css/link.css';
export default function AppBar() {
  return (
    <nav>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        HomePage
      </NavLink>
      <NavLink
        to="/register"
        exact
        className="link"
        activeClassName="activeLink"
      >
        Register
      </NavLink>
      <NavLink to="/login" exact className="link" activeClassName="activeLink">
        Login
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        className="link"
        activeClassName="activeLink"
      >
        Contacts
      </NavLink>
    </nav>
  );
}
