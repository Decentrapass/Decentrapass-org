import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/WebFooter/Footer";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
