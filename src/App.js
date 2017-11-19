import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screenshots from './components/Screenshots.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reacteer Frontend</h1>
        </header>
        <Screenshots/>
      </div>
    );
  }
}

export default App;
