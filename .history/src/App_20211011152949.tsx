import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
