import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="layout flex w-full h-full rounded-3xl shadow-themeShadow overflow-hidden">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default Layout;
