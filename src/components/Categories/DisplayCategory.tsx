import React from 'react';
import { ClipboardListIcon } from '@heroicons/react/solid';

function DisplayCategory({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return (
    <div className={className}>
      <ClipboardListIcon className="w-10" />
      <p className="ml-5 text-2xl font-light">{children}</p>
    </div>
  );
}

export default DisplayCategory;
