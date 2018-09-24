import React, { Component } from 'react';
import classnames from 'classnames';
import { Consumer } from '../store/contextAPI';

import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    company: '',
    error: {}
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    if (this.state.name === '') {
      this.setState({ error: { name: 'Gentileza, Insira um Nome' } });
    }

    if (this.state.phone === '') {
      this.setState({
        error: { phone: 'Gentileza, Insira um Fone de Contato' }
      });
    }

    const newContact = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    console.log(this.state);

    this.setState({
      name: '',
      email: '',
      phone: '',
      company: '',
      error: {}
    });

    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="content-container">
              <h2>Adicionar Contato</h2>
              <form
                className="form"
                onSubmit={this.onSubmit.bind(this, value.dispatch)}
              >
                <div className="input-group">
                  <label htmlFor="name" />
                  <input
                    type="text"
                    name="name"
                    className="text-input"
                    placeholder="Insira o Nome"
                    value={this.state.name}
                    onChange={this.onInputChange}
                    error={this.state.error.name}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" />
                  <input
                    type="email"
                    name="email"
                    className="text-input"
                    placeholder="Insira o Email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone" />
                  <input
                    type="text"
                    name="phone"
                    className="text-input"
                    placeholder="Insira o Fone"
                    value={this.state.phone}
                    onChange={this.onInputChange}
                    error={this.state.error.phone}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="company" />
                  <input
                    type="text"
                    name="company"
                    className="text-input"
                    placeholder="Insira a Empresa"
                    value={this.state.company}
                    onChange={this.onInputChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Add Contact"
                  className="button button--expense button--expense__edit"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
