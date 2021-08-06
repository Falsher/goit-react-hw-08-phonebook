import { useEffect, useState } from 'react';
import shortid from 'shortid';
import Container from './components/phonebook/container';
import Phonebook from './components/phonebook/phonebook';
import Contacts from './components/phonebook/contacts';
import Filter from './components/phonebook/filter';
import './components/phonebook/css/contacts.css';
function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));
    if (contactsData) setContacts(contactsData);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const formSubmit = (name, number) => {
    let nameContacts;

    nameContacts = {
      id: shortid.generate(),
      name,
      number,
    };

    const allContacts = contacts.map(contact => contact.name.toLowerCase());

    const nameNew = nameContacts.name.toLowerCase();

    if (allContacts.find(contact => contact === nameNew)) {
      return alert('such name already exists');
    }

    setContacts(prevContacts => [nameContacts, ...prevContacts]);
    console.log(contacts);
  };
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <Container>
      <Phonebook onSubmit={formSubmit} />
      <div className="contactsDiv">
        <Contacts
          ContactsData={filterContact}
          onDeleteContact={deleteContacts}
        />
      </div>
      <Filter value={filter} onChange={changeFilter} />
    </Container>
  );
}
export default App;
