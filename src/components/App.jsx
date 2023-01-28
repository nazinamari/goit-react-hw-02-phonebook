import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyle';
import { Box } from './utils/Box';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContsctList/ContactList';

export class App extends Component  {

  state = {
    contacts: [
      { id: nanoid(), name: 'Marina', number: '0851555005' },
      { id: nanoid(), name: 'Kirill', number: '0851000005' },
    ],
    filter: '',
  };

  onSubmitForm = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();
    
    contacts.find(({ name }) => name.toLowerCase().includes(normalizedName))
      ? alert(`${data.name} is already in contacts!`)
      : this.setState(prevState => ({
        contacts: [
          ...prevState.contacts, data],
      }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = cId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== cId),
    }));
  };
  
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Box m="0 auto">
        <h1>Phonebook</h1>
        <Section>
          <Form onSubmit={this.onSubmitForm} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length ? (
            <Box
                display="flex"
                flexDirection="column"
                gridGap="10px"
            >
            <Filter
                onChange={this.onChangeFilter}  
                value={filter}
              />
              <ContactList
                contacts={visibleContacts}
                onDelete={this.deleteContact}
              />
            </Box>
          ) : (<p>There are no contacts.</p>
          )}
        </Section>
        <GlobalStyle />
      </Box>
    )
  }
}
