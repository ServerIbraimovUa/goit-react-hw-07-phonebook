import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperetions';
const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const getActions = type =>
  isAnyOf(fetchContacts[type], addContact[type], deleteContact[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// extraReducers: {
//   [fetchContacts.pending](state) {
//     state.isLoading = true;
//   },
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   [fetchContacts.rejected](state, action) {
//     state.isLoading = false;
//     state.error = true;
//   },
//   [addContact.pending](state) {
//     state.isLoading = true;
//   },
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.unshift(action.payload);
//   },
//   [addContact.rejected](state, action) {
//     state.isLoading = false;
//     state.error = true;
//   },
// [deleteContact.pending](state) {
//   state.isLoading = true;
// },
// [deleteContact.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items = state.items.filter(contact => contact.id!== action.payload.id);
// },
// [deleteContact.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// },
