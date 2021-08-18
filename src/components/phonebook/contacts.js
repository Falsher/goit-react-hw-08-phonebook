import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import './css/contacts.css';
import { ContactsContext } from '../../App';
function Contacts() {
  const { deleteContacts, filterContact } = useContext(ContactsContext);

  return (
    <ul className="contacts">
      {filterContact.map(({ name, number, id }) => (
        <li className="contacts-items" key={id}>
          <span className="contacts-name">{name}</span>
          <span className="contacts-number">{number}</span>
          <button onClick={() => deleteContacts(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
export default Contacts;
