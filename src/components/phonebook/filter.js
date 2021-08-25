import React from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/action';
import './css/filter.css';
function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchtoProps = dispatch => ({
  onChange: events => dispatch(filterContacts(events.target.value)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(Filter);
