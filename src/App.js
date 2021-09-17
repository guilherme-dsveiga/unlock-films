import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Films from './pages/films';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/film">
          <Films/>
        </Route>
        <Route path="/users"> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
