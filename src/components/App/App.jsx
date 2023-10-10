import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { fetchContacts, addContact } from 'redux/Contacts/contactsOperetions';

export default function App() {
  const { items, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = contact => {
    if (items.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {items.length === 0 && <h3>Empty</h3>}
      {isLoading && <h3>Loading...</h3>}
      {items.length > 0 && (
        <>
          <Filter />
          {<ContactList />}
        </>
      )}
      {error && <h3>Error</h3>}
    </Container>
  );
}
