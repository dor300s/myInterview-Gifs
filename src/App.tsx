import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GifApp from './views/GifApp';

export const App = () => {
  return (
    <div className="App main-container">
      <Switch>
        <Route component={GifApp} path='/' />
      </Switch>
    </div>
  );
}

