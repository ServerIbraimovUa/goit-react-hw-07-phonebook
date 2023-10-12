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
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })

      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// const setError = state => {
//   state.isLoading = false;
//   state.error = true;
// };

// extraReducers: {
//   [fetchContacts.pending](state) {
//     state.isLoading = true;
//   },
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   [fetchContacts.rejected]: setError,

//   [addContact.pending](state) {
//     state.isLoading = true;
//   },
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.unshift(action.payload);
//   },
//   [addContact.rejected]: setError,

//   [deleteContact.pending](state) {
//     state.isLoading = true;
//   },
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = state.items.filter(
//       contact => contact.id !== action.payload.id
//     );
//   },
//   [deleteContact.rejected]: setError,
// },
