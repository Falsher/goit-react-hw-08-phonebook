import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import authSelectors from '../../redux/auth/auth-selectors';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <>
      <h1>Hello {name}! </h1>
      <button onClick={() => dispatch(authOperations.logOut())}>LogOut</button>
    </>
  );
}
