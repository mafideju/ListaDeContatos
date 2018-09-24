import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
