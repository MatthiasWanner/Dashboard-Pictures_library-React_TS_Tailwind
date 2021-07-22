import React from 'react';

import SidebarHeader from './SidebarHeader';
import Menu from './Menu';

function Sidebar(): JSX.Element {
  return (
    <div className="sidebar md:w-1/5 md:h-full bg-customBlue text-white">
      <SidebarHeader />
      <Menu />
    </div>
  );
}

export default Sidebar;
