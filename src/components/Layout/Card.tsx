import React from 'react';

interface IProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Card({ title, className, children }: IProps): JSX.Element {
  return (
    <div className={`rounded-xl bg-customPurple ${className}`}>
      <div className="card-title">{title}</div>
      <div className={'card-content'}>{children}</div>
    </div>
  );
}

export default Card;
