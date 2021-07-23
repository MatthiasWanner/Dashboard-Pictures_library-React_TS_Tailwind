import React from 'react';

import SidebarHeader from './SidebarHeader';
import Menu from './Menu';
import SidebarFooter from './SidebarFooter';

function Sidebar(): JSX.Element {
  return (
    <div className="sidebar flex flex-col justify-start md:w-1/5 md:h-full bg-customBlue text-white">
      <SidebarHeader className="md:h-1/6" />
      <Menu className="md:h-4/6" />
      <SidebarFooter className="flex items-end p-5 w-full md:h-1/6 self-end" />
    </div>
  );
}

export default Sidebar;
