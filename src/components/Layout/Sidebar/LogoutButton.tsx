import React from 'react';
import { LogoutIcon } from '@heroicons/react/solid';

function LogoutButton({ className }: { className?: string }): JSX.Element {
  return (
    <button className={className ? className : ''} onClick={() => {}}>
      <LogoutIcon />
    </button>
  );
}

export default LogoutButton;
