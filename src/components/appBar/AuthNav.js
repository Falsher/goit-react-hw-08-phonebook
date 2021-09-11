import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AppBar() {
  return (
    <>
      <NavLink
        to="/register"
        exact
        className="breadcrumb-item"
        activeClassName="active"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className="breadcrumb-item"
        activeClassName="active"
      >
        Login
      </NavLink>
    </>
  );
}
