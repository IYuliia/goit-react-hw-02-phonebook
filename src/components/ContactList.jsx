import React from 'react';
import { DeleteButton, ListItem } from './Phonebook.styled';

const ContactList = ({ name, number }) => {
  return (
    <>
      <ul>
        <ListItem>
          {name}: {number}
          <DeleteButton>Delete</DeleteButton>
        </ListItem>
      </ul>
    </>
  );
};

export default ContactList;
