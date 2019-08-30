import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import UnderConstruction from './containers/UnderConstruction/UnderConstruction';
import Error404 from './containers/Error404/Error404';

import Navbar from './NavBar/NavBar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={UnderConstruction} />
      <Route path="/contact" component={UnderConstruction} />
      <Route component={Error404} />
    </Switch>
  </Router>
  )

export default Routes;