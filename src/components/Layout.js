import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <img src={logo} alt="Mahayogam Logo" className="layout-logo" />
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
