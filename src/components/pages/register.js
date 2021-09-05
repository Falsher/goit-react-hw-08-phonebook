import { useState } from 'react';
import { useDispatch } from 'react-redux';
import register from '../../redux/auth/auth-operation';
export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    setName(e.currentTarget.value);
    setEmail(e.currentTarget.value);
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className="register" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            className="inputContact"
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            className="inputContact"
            type="email"
            name="email"
            onChange={handleChange}
            required
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
          Register
        </button>
      </form>
    </>
  );
}
