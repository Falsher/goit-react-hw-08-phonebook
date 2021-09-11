import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>
            Email
            <input
              class="form-control"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Password
            <input
              class="form-control"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <button class="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
