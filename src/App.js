import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Screenshots from './components/Screenshots.js';
import Stats from './components/Stats.js';

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
        <Screenshots state={this.state}/>
        <Stats state={this.state}/>
      </div>
    );
  }
}

export default App;
