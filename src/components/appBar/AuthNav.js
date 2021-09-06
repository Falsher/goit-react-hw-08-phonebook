import { NavLink } from 'react-router-dom';

import '../css/link.css';
export default function AppBar() {
  return (
    <>
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
    </>
  );
}
