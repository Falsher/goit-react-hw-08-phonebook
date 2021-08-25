import { useEffect } from 'react';
import Container from './components/phonebook/container';
import Phonebook from './components/phonebook/phonebook';
import Contacts from './components/phonebook/contacts';
import Filter from './components/phonebook/filter';
import './components/phonebook/css/contacts.css';
import { connect } from 'react-redux';
import operations from './redux/operations';
function App({ fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
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
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
