import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screenshots from './components/Screenshots.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections : ['', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi']
    }
  }

  render() {
    return (
      <div className="App">
        <Screenshots/>
        <Stats/>
      </div>
    );
  }
}

export default App;
