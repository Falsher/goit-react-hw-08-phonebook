import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
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

const mapStateToProps = state => ({
  ContactsData: selectors.getVisibleContacts(state),
});
const mapDispatchtoProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(Contacts);
