import React from 'react';

function Content({ className, children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={`content bg-gray-100 w-full md:h-5/6 p-5 ${className ? className : ''}`}>{children}</div>;
}

export default Content;
