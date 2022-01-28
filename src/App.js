import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Home from "./pages/home";
import Films from "./pages/films";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/film">
            <Films />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
