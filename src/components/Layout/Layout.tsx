import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar/Sidebar';

function Layout(): JSX.Element {
  return (
    <div className="layout flex w-full h-full rounded-3xl shadow-themeShadow overflow-hidden">
      <Router>
        <Sidebar />
        <MainContainer />
      </Router>
    </div>
  );
}

export default Layout;
