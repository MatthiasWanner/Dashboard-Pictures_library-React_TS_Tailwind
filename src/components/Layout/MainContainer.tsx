import React from 'react';
import { Switch } from 'react-router-dom';

import Header from './Header';
import Routes from '../Routes';

function MainContainer(): JSX.Element {
  return (
    <div className="bg-gray-100 md:w-4/5">
      <Header />
      <Switch>
        <Routes />
      </Switch>
    </div>
  );
}

export default MainContainer;
