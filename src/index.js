import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from '../src/components/app';
import NavBar from '../src/components/navBar';
import Login from '../src/components/login';
import Logout from '../src/components/logout';
import Dashboard from '../src/components/dashboard';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);