import React, { Component } from 'react';
import { Consumer } from '../store/contextAPI';

// MODEL //
class Contact extends Component {
  state = {
    displayData: false
  };
  onShowClick = () => {
    this.setState({
      displayData: !this.state.displayData
    });
  };
  onRemoveClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <div className="contact">
                <div className="contact__header">
                  <h4 className="contact__title">
                    {this.props.name}
                    <img
                      onClick={this.onShowClick}
                      style={{
                        width: '1.5rem',
                        marginLeft: '1rem',
                        cursor: 'pointer'
                      }}
                      className="icons"
                      src="/icons/down-arrow (1).svg"
                      alt=""
                    />
                    <img
                      onClick={this.onRemoveClick.bind(
                        this,
                        this.props.id,
                        value.dispatch
                      )}
                      style={{
                        width: '2.5rem',
                        marginRight: '1rem',
                        float: 'right',
                        cursor: 'pointer'
                      }}
                      className="icons"
                      src="/icons/delete-red.svg"
                      alt=""
                    />
                  </h4>
                </div>
                {this.state.displayData ? (
                  <ul className="contact__list">
                    <li className="contact__list--item">
                      <span className="contact__label">Email: </span>
                      {this.props.email}
                    </li>
                    <li className="contact__list--item">
                      <span className="contact__label">Fone: </span>
                      {this.props.phone}
                    </li>
                    <li className="contact__list--item">
                      <span className="contact__label">Empresa: </span>
                      {this.props.company}
                    </li>
                  </ul>
                ) : null}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
