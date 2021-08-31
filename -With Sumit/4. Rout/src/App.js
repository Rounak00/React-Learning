import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"; //npm install router-router-dom;
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
