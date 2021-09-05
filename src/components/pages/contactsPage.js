import { useEffect } from 'react';
import Container from '../phonebook/container';
import Phonebook from '../phonebook/phonebook';
import Contacts from '../phonebook/contacts';
import Filter from '../phonebook/filter';
import '../phonebook/css/contacts.css';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
function ContactPage({ fetchContacts }) {
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
export default connect(null, mapDispatchToProps)(ContactPage);
