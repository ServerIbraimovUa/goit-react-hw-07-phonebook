import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactsReducer';
import { filterReducer } from './Contacts/contactFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
