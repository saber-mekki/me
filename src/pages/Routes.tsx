import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Recommendation from "./Recommendation";
import ContactUs from "./ContactUs";
import Experience from "./Experience";
import Home from "./Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recommendation">
          <Recommendation  />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;