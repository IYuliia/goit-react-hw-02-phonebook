import React from 'react';
import { InputName, Input } from './Phonebook.styled';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    const filter = event.target.value;
    this.setState({ filter }, () => {
      const { onChange } = this.props;
      onChange(this.state.filter);
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <InputName>Find contacts by name</InputName>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

export default Filter;
