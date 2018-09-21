import React, { Component } from 'react';
import Contact from './Contact';

// VIEW //

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Marcio Rodrigues',
        email: 'mafideju@outlook.com',
        phone: '954984696',
        company: 'Maffee'
      },
      {
        id: 2,
        name: 'Joni Mitchell',
        email: 'joni@mitchell.com',
        phone: '45656545',
        company: 'Canadian Hejira'
      },
      {
        id: 3,
        name: 'Joe Zawinul',
        email: 'joe@zawinul.com',
        phone: '45656545',
        company: 'Weather Report'
      }
    ]
  };
  onRemoveClickHandler = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <div>
        <h1>Lista de Contatos MAFFEE WebDev</h1>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            company={contact.company}
            onRemoveClickHandler={this.onRemoveClickHandler.bind(
              this,
              contact.id
            )}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
