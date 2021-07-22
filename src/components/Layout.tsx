import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="layout flex w-full h-full">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default Layout;
