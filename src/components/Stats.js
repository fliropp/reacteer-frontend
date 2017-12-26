import React, {Component,Proptypes} from 'react';
import FourOfours from './subcomponents/FourOfours.js';
import '../css/Stats.css';

export default class Stats extends Component {


  render() {
    return (
      <div className="stats">
        <div className="statsHeader">
          Klikk {this.props.reacteerState.sections[this.props.reacteerState.idx] }
        </div>
        <div className="statsItem">
          <FourOfours state={this.props}/>
        </div>
      </div>
    );
  }
}
