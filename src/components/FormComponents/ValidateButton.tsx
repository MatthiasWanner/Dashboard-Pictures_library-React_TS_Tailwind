import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

function ValidateButton({ children, className, type, handleClick }: IProps): JSX.Element {
  return (
    <button type={type} className={className ? className : ''} onClick={handleClick ? () => handleClick() : undefined}>
      {children}
    </button>
  );
}

export default ValidateButton;
