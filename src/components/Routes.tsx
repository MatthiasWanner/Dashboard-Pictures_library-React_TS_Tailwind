import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Photos from './Photos/Photos';
import Categories from './Categories/Categories';

function Routes(): JSX.Element {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/photos" component={Photos} />
      <Route path="/categories" component={Categories} />
    </>
  );
}

export default Routes;
