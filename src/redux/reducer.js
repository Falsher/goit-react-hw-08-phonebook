import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './action';
// import types from './types';
// console.log(actions);
const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.formSubmit]: (state, action) => [...state, action.payload],
    [actions.deleteContacts]: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
);
// const items = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case types.ADD_SUBMIT:
//       return [...state, payload];
//     case types.DELETE_CONTACTS:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [actions.filterContacts]: (_state, action) => action.payload,
});
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [actions.filterContacts]:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
