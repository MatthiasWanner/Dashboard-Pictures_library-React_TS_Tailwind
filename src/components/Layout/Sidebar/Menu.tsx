import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeIcon, PhotographIcon, ClipboardListIcon } from '@heroicons/react/solid';

import MenuItem from './MenuItem';

function Menu(): JSX.Element {
  const history = useHistory();

  return (
    <div className="menu flex flex-col items-start p-5">
      <MenuItem text="Accueil" logo={HomeIcon} handleClick={() => history.push('/')} />
      <MenuItem text="Photos" logo={PhotographIcon} handleClick={() => history.push('/photos')} />
      <MenuItem text="Categories" logo={ClipboardListIcon} handleClick={() => history.push('/categories')} />
    </div>
  );
}

export default Menu;
