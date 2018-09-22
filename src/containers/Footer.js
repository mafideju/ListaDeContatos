import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="content-container">
        <h4 className="footer__content--text">
          Desenvolvido em 2018 pela &copy;MAFFEE usando React / Redux com Icones
          da{' '}
          <a
            className="footer__content--text-links"
            href="https://www.flaticon.com"
            target="_blank"
          >
            Flat Icon
          </a>
        </h4>
      </div>
    </div>
  </footer>
);

export default Footer;
