import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VolunteerDashboard from './components/Volunteer/VolunteerDashboard';
import GateAdminDashboard from './components/GateAdminDashboard';
import MainAdminDashboard from './components/MainAdminDashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/gate-admin" element={<GateAdminDashboard />} />
        <Route path="/main-admin" element={<MainAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
