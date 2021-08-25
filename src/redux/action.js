import { createAction } from '@reduxjs/toolkit';

export const fetchSubmitRequest = createAction('contacts/fetchSubmitRequest');
export const fetchSubmitSuccess = createAction('contacts/fetchSubmitSuccess');
export const fetchSubmitError = createAction('contacts/fetchSubmitError');

export const formSubmitRequest = createAction('contacts/formSubmitRequest');
export const formSubmitSuccess = createAction('contacts/formSubmitSuccess');
export const formSubmitError = createAction('contacts/formSubmitError');

export const formDeleteRequest = createAction('contacts/formDeleteRequest');
export const formDeleteSuccess = createAction('contacts/formDeleteSuccess');
export const formDeleteError = createAction('contacts/formDeleteError');

export const deleteContacts = createAction('contacts/delete');

export const filterContacts = createAction('contacts/filter');
