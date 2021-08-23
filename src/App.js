import Container from './components/phonebook/container';
import Phonebook from './components/phonebook/phonebook';
import Contacts from './components/phonebook/contacts';
import Filter from './components/phonebook/filter';
import './components/phonebook/css/contacts.css';
function App() {
  // useEffect(() => {
  //   const contactsData = JSON.parse(localStorage.getItem('contacts'));
  //   if (contactsData) setContacts(contactsData);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Phonebook />
      <div className="contactsDiv">
        <Contacts />
      </div>
      <Filter />
    </Container>
  );
}
export default App;
