import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerRequest, registerSuccess, registerError } from './auth-action';
const user = createReducer(
  { name: '', email: '' },
  {
    [registerSuccess]: (_state, action) => action.payload.user,
  },
);
const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
});
const token = createReducer(null, {
  [registerRequest]: (_, { payload }) => payload.token,
});

export default combineReducers({
  user,
  token,
  loading,
});
