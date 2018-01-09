import React, {Component} from 'react';
import HelpTextContainer from '../../containers/subcontainers/HelpTextContainer.js';

const metrics = ["bootup-time","first-meaningful-paint", "consistently-interactive", "critical-request-chains", "offscreen-images",
                "time-to-first-byte", "first-interactive", "link-blocking-first-paint", "dom-size", "speed-index-metric", "redirects",
                "total-byte-weight", "user-timings", "uses-long-cache-ttl"];

export default class LightHouse extends Component {

  metricsList() {
    this.setState();
    return metrics.map((x) => {
      let key = this.props.state.reacteerState.lighthouseData[x].description;
      let score = this.props.state.reacteerState.lighthouseData[x].score;
      let value = this.props.state.reacteerState.lighthouseData[x].displayValue;
      let chunk = {name: x, txt: this.props.state.reacteerState.lighthouseData[x].helpText }
      return(
          <div className="lhEntry">
            <div className="lhMetric">
              <div className="lhKey">{key}</div>
              <div className="lhScore">{score}</div>
              <div className="lhValue">{value}</div>
              <HelpTextContainer state={chunk}/>
            </div>

            <div className="lhInfo">
             {this.props.state.reacteerState.helpTxt[x]}</div>
          </div>
      );
    });
  }

  render() {
    if(Object.keys(this.props.state.reacteerState.lighthouseData).length === 0) {
      return (
        <div className="lighthouse">
          <div className="lhHeader">Lighthouse metrics</div>
          <div className="lhContainer">
            <div className="lh_placeholder">WAITING FOR LIGHTHOUSE DATA</div>
          </div>
        </div>
      );
    }else{
      return (
        <div className="lighthouse">
          <div className="lhHeader">Lighthouse metrics</div>

          <div className="lhContainer">
            <div className="lhEntry_header">
              <div className="lhKey_header">METRIC</div>
              <div className="lhScore_header">SCORE</div>
              <div className="lhValue_header">VALUE</div>
            </div>

            <div className="lhMetrics">{this.metricsList()}</div>
          </div>
        </div>
      );
    }
  }

}
