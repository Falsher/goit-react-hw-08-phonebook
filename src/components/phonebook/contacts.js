import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/action';
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
const getStateToProps = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  ContactsData: getStateToProps(items, filter),
});
const mapDispatchtoProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(Contacts);
