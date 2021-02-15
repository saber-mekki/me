import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Recommendation from "./Recommendation";
import ContactUs from "./ContactUs";
import Experience from "./Experience";
import Footer from "./Footer";

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
        <Route path="/">
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;