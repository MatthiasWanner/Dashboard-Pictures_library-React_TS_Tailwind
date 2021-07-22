import React from 'react';

interface IProps {
  text: string;
  logo: any; //TODO: find the goo interface (props: React.ComponentProps<'svg'>) => JSX.Element
  handleClick?: () => void;
}

function MenuItem({ text, logo, handleClick }: IProps): JSX.Element {
  return (
    <button
      className="menu-item flex justify-start items-center md:w-full hover:bg-blue-200 hover:text-gray-700 p-5 mt-5 rounded-xl"
      onClick={handleClick}
    >
      <span className="md:w-10">{logo()}</span>
      <p className="ml-5 text-lg">{text}</p>
    </button>
  );
}

export default MenuItem;
