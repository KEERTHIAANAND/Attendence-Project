import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CitiesPage from './components/CitiesPage';
import BatchPage from './components/BatchPage';
import StudentListPage from './components/StudentListPage';
import FeeStatusPage from './components/FeeStatusPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cities" element={<Layout><CitiesPage /></Layout>} />
        <Route path="/new-cities" element={<Layout><BatchPage /></Layout>} />
        <Route path="/student-list" element={<Layout><StudentListPage /></Layout>} />
        <Route path="/fee-status" element={<Layout><FeeStatusPage /></Layout>} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
