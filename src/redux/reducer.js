import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  formSubmitRequest,
  formSubmitSuccess,
  formSubmitError,
  filterContacts,
  formDeleteRequest,
  formDeleteSuccess,
  formDeleteError,
  fetchSubmitRequest,
  fetchSubmitSuccess,
  fetchSubmitError,
} from './action';

const items = createReducer([], {
  [fetchSubmitSuccess]: (_state, { payload }) => payload,
  [formSubmitSuccess]: (state, { payload }) => [...state, payload],
  [formDeleteSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [formSubmitRequest]: () => true,
  [formSubmitSuccess]: () => false,
  [formSubmitError]: () => false,
  [formDeleteRequest]: () => true,
  [formDeleteSuccess]: () => false,
  [formDeleteError]: () => false,
  [fetchSubmitRequest]: () => true,
  [fetchSubmitSuccess]: () => false,
  [fetchSubmitError]: () => false,
});
export default combineReducers({
  items,
  filter,
  loading,
});
