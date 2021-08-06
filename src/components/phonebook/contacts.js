import React from 'react';
import PropTypes from 'prop-types';
import './css/contacts.css';

function Contacts({ ContactsData, onDeleteContact }) {
  return (
    <ul className="contacts">
      {ContactsData.map(({ name, number, id }) => (
        <li className="contacts-items" key={id}>
          <span className="contacts-name">{name}</span>
          <span className="contacts-number">{number}</span>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
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
