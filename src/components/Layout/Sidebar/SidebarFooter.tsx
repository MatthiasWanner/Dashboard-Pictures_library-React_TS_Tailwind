import { LogoutIcon } from '@heroicons/react/solid';
import React from 'react';
import { useUserFromStore } from '../../../../store/user.slice';
import LogoutButton from './LogoutButton';

function SidebarFooter({ className }: { className?: string }): JSX.Element {
  const { user } = useUserFromStore();

  return (
    <div className={`sidebar-footer ${className ? className : ''}`}>
      <div className="flex justify-start items-center">
        <LogoutButton className="btn btn-default w-2/12 bg-red-400 rounded-lg shadow-themeShadow p-2" />
        <p className="ml-5 text-xl">{user.username}</p>
      </div>
    </div>
  );
}

export default SidebarFooter;
