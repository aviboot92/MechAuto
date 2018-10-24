import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Location from "../components/Location";
import Service from "../components/Service";

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Route path="/" component={Location} exact ={true} />
        <Route path="/ymmt/serviceList" component={Service} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
