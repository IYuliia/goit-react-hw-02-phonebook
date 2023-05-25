import React from 'react';
import { DeleteButton, ListItem } from './Phonebook.styled';

class ContactList extends React.Component {
  render() {
    return (
      <>
        <ul>
          <ListItem>Yuliia</ListItem>
          <DeleteButton>Delete</DeleteButton>
        </ul>
      </>
    );
  }
}
export default ContactList;
