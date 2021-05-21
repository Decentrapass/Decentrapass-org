import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import WebNav from "./components/WebNav/WebNav";
import Home from "./pages/Home/Home";
import Footer from "./components/WebFooter/Footer";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <WebNav />
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
