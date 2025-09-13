import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VolunteerDashboard from './components/Volunteer/VolunteerDashboard';
import GateAdminDashboard from './components/GateAdminDashboard';
import MainAdminDashboard from './components/MainAdminDashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/volunteer" component={VolunteerDashboard} />
        <Route path="/gate-admin" component={GateAdminDashboard} />
        <Route path="/main-admin" component={MainAdminDashboard} />
      </Switch>
    </Router>
  );}
export default App;

