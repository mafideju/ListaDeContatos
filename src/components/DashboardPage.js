import React from 'react';
import Contact from './Contact';
import Contacts from './Contacts';
import { Provider } from '../store/contextAPI';
import ES6 from '../ZONA/ES6';

const DashboardPage = () => (
  <Provider>
    <div className="content-container">
      <Contacts />
    </div>
  </Provider>
);

export default DashboardPage;
