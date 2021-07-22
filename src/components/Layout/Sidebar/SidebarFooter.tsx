import { LogoutIcon } from '@heroicons/react/solid';
import React from 'react';
import { useUserFromStore } from '../../../../store/user.slice';
import LogoutButton from './LogoutButton';

function SidebarFooter(): JSX.Element {
  const { user } = useUserFromStore();

  return (
    <div className="sidebar-footer flex items-center p-5 w-full md:h-1/12 self-end">
      <LogoutButton />
      <p className="ml-5">{user.username}</p>
    </div>
  );
}

export default SidebarFooter;
