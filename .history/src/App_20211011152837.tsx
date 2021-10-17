import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

BrowserRouter

function App() {
  return (
    <div className="App">
      <NewRoom />
    </div>
  );
}

export default App;
