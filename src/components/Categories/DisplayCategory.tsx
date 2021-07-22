import React from 'react';

function DisplayCategory({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}

export default DisplayCategory;
