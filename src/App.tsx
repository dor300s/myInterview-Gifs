import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GifApp } from './views/GifApp';
import { GifDetails } from './views/GifDetails';


export const App = () => {
  return (
    <div className="App main-container">
      <Switch>
        <Route component={GifDetails} path='/details' />
        <Route component={GifApp} path='/' />
      </Switch>
    </div>
  );
}

