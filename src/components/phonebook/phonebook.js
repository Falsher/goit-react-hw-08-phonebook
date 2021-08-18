import { useState, useContext } from 'react';
import { ContactsContext } from '../../App';
import './css/phonebook.css';
export default function Phonebook() {
  const { formSubmit } = useContext(ContactsContext);
  const [textName, setTextName] = useState('');
  const [number, setNumber] = useState('');

  const hadleInputChange = e => {
    setTextName(e.currentTarget.value);
  };
  const hadleInputNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit(textName, number);
    reset();
  };
  const reset = () => {
    setTextName('');
    setNumber('');
  };

  return (
    <form className="formFilling" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="inputContact"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={textName}
          onChange={hadleInputChange}
        />
      </label>
      <label>
        Number phone
        <input
          className="inputContact"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={hadleInputNumber}
        />
      </label>

      <button className="buttonAdd" type="submit">
        Add contact
      </button>
    </form>
  );
}
