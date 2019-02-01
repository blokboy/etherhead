import React, { Component } from 'react';
import Scene from './Components/Scene';
import Cube from './Components/Cube';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scene />
        <Cube />
      </div>
    );
  }
}

export default App;
