import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Location from "./components/Location";
import Service from "./components/Service";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Location/>
      <Service/> 
    </div>
  </Router>
);

export default App;
