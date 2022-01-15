import React from 'react';
import Tile from './Components/tile';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
        <Tile></Tile>
      </header>
    </div>
  );
}

export default App;
