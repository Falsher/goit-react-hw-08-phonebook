const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;
const getVisibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getFilter, getVisibleContacts };
