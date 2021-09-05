import axios from 'axios';
import { registerRequest, registerSuccess, registerError } from './auth-action';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(`users/signup`, credentials);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default register;
