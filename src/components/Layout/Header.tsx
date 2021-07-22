import React, { useState } from 'react';

function Header(): JSX.Element {
  const date = useState(new Date().toLocaleDateString());

  return (
    <div className="bg-gray-100 border border-b-black shadow-themeShadow hidden md:flex md:h-1/6 md:justify-end">
      <p className="md:w-1/4 flex items-center justify-end text-2xl text-gray-500 p-10">{date}</p>
    </div>
  );
}

export default Header;
