import { createAction } from '@reduxjs/toolkit';
// import types from './types';
import shortid from 'shortid';

const formSubmit = createAction('contacts/add', function prepare(name, number) {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
// const formSubmit = (name, number) => ({
//   type: types.ADD_SUBMIT,
//   payload: { id: shortid.generate(), name, number },
// });
const deleteContacts = createAction('contacts/delete');
// const deleteContacts = contactId => ({
//   type: types.DELETE_CONTACTS,
//   payload: contactId,
// });
const filterContacts = createAction('contacts/filter');
// const filterContacts = value => ({
//   type: types.FILTER_CONTACTS,
//   payload: value,
// });
// eslint-disable-next-line import/no-anonymous-default-export
export default { formSubmit, deleteContacts, filterContacts };
