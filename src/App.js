import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Switch>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
