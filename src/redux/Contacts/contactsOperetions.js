import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65245b3bea560a22a4e9c96d.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchingInProgress());
//   try {
//     const response = await axios.get('/contacts');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contacts => {
    const response = await axios.post('/contacts', contacts);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);

// export const postContact = contact => async dispatch => {
//   const response = await axios.post('/contacts', contact);
//   dispatch(addContact(response.data));
// };

// export const deleteContactId = id => async dispatch => {
//   dispatch(fetchingInProgress());
//   try {
//     const response = await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContact(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
