import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './containers/About/About';
import Navbar from './NavBar/NavBar';

const Router = () => {
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
}