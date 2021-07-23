import React from 'react';

interface IProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Card({ title, className, children }: IProps): JSX.Element {
  return (
    <div className={`rounded-xl bg-customPurple text-white shadow-themeShadow p-5 ${className ? className : ''}`}>
      <div className="card-title font-medium text-3xl">{title}</div>
      <div className={'card-content w-full h-full'}>{children}</div>
    </div>
  );
}

export default Card;
