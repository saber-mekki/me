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
        <Route path="/about/members">
          <Experience />
        </Route>
        <Route path="/about/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/another/teams">
          <Recommendation  />
        </Route>
        <Route path="/settings">
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