import React from 'react';
import Helmet from 'react-helmet';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { NAME } from './config';

import Nav from './components/Nav';
import Home from './pages/Home';
import Examples from './pages/Examples';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import {
  HOME_ROUTE,
  EXAMPLES_ROUTE
} from './routes';

const App = () => (
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={ `%s | ${NAME}` } defaultTitle={ NAME } />
    <Nav />
    <Switch>
      <Route exact path={ HOME_ROUTE } render={ () => (<Home />) } />
      <Route path={ EXAMPLES_ROUTE } render={ () => (<Examples />) } />
      <Route component={ NotFound } />
    </Switch>
    <Footer />
  </div>
);

export default App;
