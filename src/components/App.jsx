import React from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { Box, Title } from './Phonebook.styled';

class App extends React.Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <Box>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Box>
    );
  }
}

export default App;
