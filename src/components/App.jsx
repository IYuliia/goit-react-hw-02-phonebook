import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { Box, Title } from './Phonebook.styled';

class App extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilterChange = filter => {
    console.log(filter);
  };

  render() {
    const nameId = nanoid();
    const { name, number } = this.state;
    return (
      <Box>
        <Title>Phonebook</Title>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleInputChange}
        />
        <Title>Contacts</Title>
        <Filter onChange={this.handleFilterChange} />
        <ContactList key={nameId} name={name} number={number} />
      </Box>
    );
  }
}

export default App;
