import axios from 'axios';
import {
  formSubmitRequest,
  formSubmitSuccess,
  formSubmitError,
  formDeleteRequest,
  formDeleteSuccess,
  formDeleteError,
  fetchSubmitRequest,
  fetchSubmitSuccess,
  fetchSubmitError,
} from './action';
axios.defaults.baseURL = 'http://localhost:4040';
const fetchContacts = () => async dispatch => {
  dispatch(fetchSubmitRequest());
  const { data } = await axios.get('/contacts');
  try {
    dispatch(fetchSubmitSuccess(data));
  } catch (error) {
    dispatch(fetchSubmitError(error));
  }
  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchSubmitSuccess(data)))
  //   .catch(error => dispatch(fetchSubmitError(error)));
};

const formSubmit = (name, number) => dispatch => {
  const contacts = {
    name,
    number,
  };
  dispatch(formSubmitRequest());
  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(formSubmitSuccess(data)))
    .catch(error => dispatch(formSubmitError(error)));
};
const deleteContacts = contactId => dispatch => {
  dispatch(formDeleteRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(formDeleteSuccess(contactId)))
    .catch(error => dispatch(formDeleteError(error)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { formSubmit, deleteContacts, fetchContacts };
