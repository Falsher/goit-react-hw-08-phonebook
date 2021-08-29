import { createSelector } from '@reduxjs/toolkit';
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default { getFilter, getVisibleContacts };
