import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ScreenshotContainer from './containers/ScreenshotContainer.js';
import StatsContainer from './containers/StatsContainer.js';
import ReacteerHeadContainer from './containers/ReacteerHeadContainer.js';


class App extends Component {


  render() {
    return (
        <div className="App">
          <ReacteerHeadContainer state={this.props}/>
          <div className="content">
            <ScreenshotContainer state={this.props}/>
            <StatsContainer state={this.props}/>
          </div>
        </div>
    );
  }
}

export default App;
