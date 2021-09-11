import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div class="form-group">
          <div class="form-group">
            <label>
              Name
              <input
                class="form-control"
                type="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div class="form-group">
            <label>
              Email
              <input
                class="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                required
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
            Register
          </button>
        </div>
      </form>
    </>
  );
}
