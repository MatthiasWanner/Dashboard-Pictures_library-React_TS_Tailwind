import React from 'react';
import { LogoutIcon } from '@heroicons/react/solid';

function LogoutButton(): JSX.Element {
  return (
    <button className="btn btn-default w-1/5" onClick={() => {}}>
      <LogoutIcon />
    </button>
  );
}

export default LogoutButton;
