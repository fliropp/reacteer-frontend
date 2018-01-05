import React, { Component } from 'react';
import logo from './logo.png';
import './css/App.css';
import ScreenshotContainer from './containers/ScreenshotContainer.js';
import StatsContainer from './containers/StatsContainer.js';


class App extends Component {

  render() {
    return (
        <div className="App">
          <ScreenshotContainer state={this.props}/>
          <StatsContainer state={this.props}/>
        </div>
    );
  }
}

export default App;
