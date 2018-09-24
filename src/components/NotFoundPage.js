import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../containers/Header';
import Footer from '../containers/Footer';

const NotFoundPage = () => (
  <div>
    <Header />
    <h1 className="not-found not-found__title">404</h1>
    <h1 className="not-found not-found__subtitle">Página Não Encontrada</h1>

    <img className="not-found" src="/images/white-cat.jpg" alt="" />
    <Footer />
  </div>
);
export default NotFoundPage;
