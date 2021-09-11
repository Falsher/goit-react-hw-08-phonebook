import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacts({ ContactsData, onDeleteContact }) {
  return (
    <ul className="contacts alert alert-success">
      {ContactsData.map(({ name, number, id }) => (
        <li className="contacts-items" key={id}>
          <span className="contacts-name">{name}</span>
          <span className="contacts-number">{number}</span>
          <button class="btn btn-danger" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
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
