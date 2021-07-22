import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './Header';
import Routes from '../Routes';

function MainContainer(): JSX.Element {
  return (
    <div className="bg-gray-100 md:w-4/5">
      <Header />
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default MainContainer;
