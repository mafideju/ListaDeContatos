import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from '../store/contextAPI';

import LoginPage from '../containers/LoginPage';

// import Contact from '../components/Contact';
import DashboardPage from '../components/DashboardPage';
import AddContact from '../components/AddContact';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Provider>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/add" component={AddContact} />
        {/*<PrivateRoute path="/contact" component={Contact} />*/}
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Provider>
  </Router>
);

export default AppRouter;
