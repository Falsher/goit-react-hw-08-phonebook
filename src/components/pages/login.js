import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
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
      <form className="login" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className="inputContact"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            className="inputContact"
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </label>
        <button className="buttonAdd" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
