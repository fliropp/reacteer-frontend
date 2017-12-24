import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ScreenshotContainer from './containers/ScreenshotContainer.js';
import StatsContainer from './containers/StatsContainer.js';


class App extends Component {

  /*constructor(props) {
    super(props);
    this.state = {
      sections : ['', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi'],
      idx: 0,
      urlentries:"<div className='urlentries'> WAITING TO LOAD DATA</div>"
    }
  }*/

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
