import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import authSelectors from '../../redux/auth/auth-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div class="card">
      <div class="card-body">
        <h1 class="alert-heading">Hello {name}! </h1>
      </div>
      <button
        class="btn btn-warning"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </button>
    </div>
  );
}
