import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import Homepage from './components/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Homepage />

      </div>
    </BrowserRouter>
  );
}

export default App;
