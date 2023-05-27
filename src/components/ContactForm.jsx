import React from 'react';
import {
  PhonebookContainer,
  InputName,
  Input,
  AddButton,
} from './Phonebook.styled';

const ContactForm = ({ name, number, onChange }) => {
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    onChange({ name, value });
  };
  return (
    <PhonebookContainer>
      <InputName></InputName>
      <Input
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={event => handleInputChange(event)}
      />
      <InputName>Number</InputName>
      <Input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={event => handleInputChange(event)}
      />
      <AddButton>Add contact</AddButton>
    </PhonebookContainer>
  );
};
export default ContactForm;
