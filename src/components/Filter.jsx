import React from 'react';
import { InputName, Input } from './Phonebook.styled';

class Filter extends React.Component {
  state = {
    filter: '',
  };
  render() {
    return (
      <>
        <InputName>Find contacts by name</InputName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}
export default Filter;
