import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './Test';

export function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={Test} />
      </React.Fragment>
    </BrowserRouter>
  );
}