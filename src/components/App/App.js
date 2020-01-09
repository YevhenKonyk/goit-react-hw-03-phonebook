import React, { Component } from 'react';
import uuid from 'uuid';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    // Get from localStorage
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      try {
        const contacts = JSON.parse(persistedContacts);
        this.setState({ contacts });
      } catch (e) {
        console.error(e.message);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      // Save to localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  isContactInList = (contact, contacts) =>
    contacts.find(element =>
      element.name.toLowerCase().includes(contact.name.toLowerCase()),
    );

  addContact = contact => {
    const { contacts } = this.state;
    if (!this.isContactInList(contact, contacts)) {
      const newContact = {
        ...contact,
        id: uuid.v4(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert(`The contact ${contact.name} is already in list`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <Section>
          <ContactForm onAddContact={this.addContact} />
        </Section>

        <Section>
          <ContactFilter
            value={filter}
            onChangeFilter={this.handleInputChange}
          />
        </Section>

        <Section>
          <ContactList
            items={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
