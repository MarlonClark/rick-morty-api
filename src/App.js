import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import "./assets/css/index.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Pages
import Characters from "./views/Characters";
import About from "./views/About";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
