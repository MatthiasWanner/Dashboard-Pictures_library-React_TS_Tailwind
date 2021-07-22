import React from 'react';

import SidebarHeader from './SidebarHeader';
import Menu from './Menu';
import SidebarFooter from './SidebarFooter';

function Sidebar(): JSX.Element {
  return (
    <div className="sidebar flex flex-col justify-start md:w-1/5 md:h-full bg-customBlue text-white">
      <SidebarHeader />
      <Menu />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
