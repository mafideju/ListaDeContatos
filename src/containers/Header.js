import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" exact to="/dashboard">
          <img
            className="header__title--animated-left"
            src="/images/logo-completo-branco.png"
            alt=""
          />
          {/*<h1 className="header__title--animated-left">**Boilerplate**</h1>*/}
        </NavLink>
        <NavLink className="button button--logout" to="/add">
          Novo
        </NavLink>
        <NavLink className="button button--logout" to="/edit">
          Editar
        </NavLink>
        {/*

    <NavLink to="/help" activeClassName="orange">
      Ajuda
    </NavLink>
    */}
        <button
          className="button button--logout button--animated__right"
          onClick={startLogout}
        >
          Sair
        </button>
      </div>
    </div>
  </header>
);
const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
