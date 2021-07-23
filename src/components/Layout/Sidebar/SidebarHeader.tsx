import React from 'react';

function SidebarHeader({ className }: { className?: string }): JSX.Element {
  return (
    <header className={`flex flex-col items-start p-5 ${className ? className : ''}`}>
      <h1 className="text-2xl font-robotoBold">DashBoard</h1>
    </header>
  );
}

export default SidebarHeader;
