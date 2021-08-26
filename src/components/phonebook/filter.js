import React from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/action';
import selectors from '../../redux/selectors';
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
  value: selectors.getFilter(state),
});
const mapDispatchtoProps = dispatch => ({
  onChange: events => dispatch(filterContacts(events.target.value)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(Filter);
