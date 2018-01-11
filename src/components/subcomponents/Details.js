import React, {Component} from 'react';
import JSONPretty from 'react-json-pretty';

export default class Details extends Component {

  render() {
    return(
      <div className="lhDetails">
        <div className="lhInfo">{this.props.info}</div>
        <div className="lhJson">
          <JSONPretty id="json-pretty" json={this.props.details}/>
        </div>
      </div>
    );
  }
}
