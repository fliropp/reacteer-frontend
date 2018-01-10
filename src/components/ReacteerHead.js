import React, {Component} from 'react';
import '../css/ReacteerHead.css';

export default class ReacteerHead extends Component {


  toggleStats() {
    this.props.toggleStats();
  }

  render() {
    return (
      <div className="ReacteerHead">
        <img src="/ricon.png" height='50px'/>
        <div className="toggleStatsButton">
          <button onClick= {() => this.toggleStats()}>{this.props.reacteerState.showStats? 'hide stats': 'show stats'}</button>
        </div>
      </div>
    );
  }
}
