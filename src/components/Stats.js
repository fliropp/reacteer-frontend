import React, {Component} from 'react';
import FourOfours from './subcomponents/FourOfours.js';
import LightHouse from './subcomponents/LightHouse.js'
import '../css/Stats.css';
import ToggleDisplay from 'react-toggle-display';

export default class Stats extends Component {


  render() {
    return (

      <div className="stats">
        <ToggleDisplay className="toggle" show = {typeof(this.props.state) === 'undefined'? true : this.props.reacteerState.showStats}>
        <div className="statsHeader">
          klikk/{this.props.reacteerState.sections[this.props.reacteerState.idx] }
        </div>
        <div className="statsItem">
          <FourOfours state={this.props}/>
          <LightHouse state={this.props}/>
        </div>
        </ToggleDisplay>
      </div>
    );
  }
}
