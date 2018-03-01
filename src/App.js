import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkers from './game/Checkers';

class App extends Component {
  render() {
    Checkers();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
