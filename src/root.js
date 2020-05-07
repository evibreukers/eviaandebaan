import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Play from "./pages/play/play";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Instructions from "./pages/instructions/instructions";
import Win from "./pages/win/win";
import Lose from "./pages/lose/lose";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/win">
            <Win />
          </Route>
          <Route path="/lose">
            <Lose />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Root;
