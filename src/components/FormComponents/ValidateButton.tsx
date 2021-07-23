import React from 'react';

interface IProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children: React.ReactNode;
}

function ValidateButton({ children, className, type }: IProps): JSX.Element {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default ValidateButton;
