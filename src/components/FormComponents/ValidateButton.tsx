import React from 'react';

interface IProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  text: string;
}

function ValidateButton({ text, className, type }: IProps): JSX.Element {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

export default ValidateButton;
