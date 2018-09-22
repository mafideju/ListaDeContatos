import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../store/contextAPI';

// VIEW //

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1>Lista de Contatos MAFFEE WebDev</h1>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  company={contact.company}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
