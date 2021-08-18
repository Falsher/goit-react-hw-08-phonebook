import { React, useContext } from 'react';
import { ContactsContext } from '../../App';
import './css/filter.css';
function Filter() {
  const { filter, changeFilter } = useContext(ContactsContext);
  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </div>
  );
}

export default Filter;
