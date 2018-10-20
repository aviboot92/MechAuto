import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Nav from "../components/Nav";
import Location from "../components/Location";
import YMMT from "../components/YMMT";
import Service from "../components/Service";

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Nav />
        <Route path="/" component={Location} />
        <Route path="/ymmt" component={YMMT} />
        <Route path="/ymmt/serviceList" component={Service} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
