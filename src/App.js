import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Films from './pages/films';
import About from './pages/about';
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/film">
          <Films />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
