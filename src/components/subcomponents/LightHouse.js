import React, {Component} from 'react';
import HelpTextContainer from '../../containers/subcontainers/HelpTextContainer.js';
import Details from './Details.js';

const metrics = ["bootup-time","first-meaningful-paint", "consistently-interactive", "critical-request-chains", "offscreen-images",
                "time-to-first-byte", "first-interactive", "link-blocking-first-paint", "dom-size", "speed-index-metric", "redirects",
                "total-byte-weight", "user-timings", "uses-long-cache-ttl"];

export default class LightHouse extends Component {


  metricsList() {
    this.setState();
    return metrics.map((x) => {
      let {description, score, displayValue, helpText, extendedInfo} = this.props.state.reacteerState.lighthouseData.audits[x];
      let chunk = {name: x, txt: helpText, details: extendedInfo};
      return(
          <div className="lhEntry">
            <div className="lhMetric">
              <div className="lhKey">{description}</div>
              <div className="lhScore">{score}</div>
              <img className="lhScoreColor" src={this.calcColorCode(score)} height='10px'/>
              <div className="lhValue">{displayValue}</div>
              <HelpTextContainer state={chunk}/>
            </div>
            <Details info={this.props.state.reacteerState.helpTxt[x]} details={this.props.state.reacteerState.details[x]}/>
          </div>
      );
    });
  }

  calcColorCode(scr) {
    if(scr || scr === 0){
      switch(true) {
        case (typeof(scr) === 'boolean'): return 'score_nan.png';
        case (scr < 45): return 'score_red.png';
        case (scr > 44 && scr < 75): return 'score_org.png';
        case (scr > 74): return 'score_grn.png';
      }
    }else{
      return 'score_nan.png';
    }
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
