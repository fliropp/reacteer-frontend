import React, {Component,Proptypes} from 'react';

export default class LightHouse extends Component {




  render() {
    if(Object.keys(this.props.state.reacteerState.lighthouseData).length == 0) {
      return (
        <div className="lighthouse">
          <div className="lhHeader">Lighthouse metrics</div>
          <div className="lhContainer">
            <div className="lh_placeholder">WAITING FOR LIGHTHOUSE DATA</div>
          </div>
        </div>
      );
    }
    return (
      <div className="lighthouse">
        <div className="lhHeader">Lighthouse metrics</div>
        <div className="lhContainer">
          <div className="lhEntry_header">
            <div className="lhKey_header">METRIC</div>
            <div className="lhScore_header">SCORE</div>
            <div className="lhValue_header">VALUE</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">First meaningful paint</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["first-meaningful-paint"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["first-meaningful-paint"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["first-meaningful-paint"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Consistently Interactive</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["consistently-interactive"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["consistently-interactive"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["consistently-interactive"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Critical Request Chains</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["critical-request-chains"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["critical-request-chains"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["critical-request-chains"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Offscreen Images</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["offscreen-images"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["offscreen-images"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["offscreen-images"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Time to First Byte</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["time-to-first-byte"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["time-to-first-byte"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["time-to-first-byte"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">First Interactive</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["first-interactive"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["first-interactive"].displayValue}</div>
            </div>
          <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["first-interactive"].helpText}</div>


          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Link-blocking First Paint</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["link-blocking-first-paint"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["link-blocking-first-paint"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["link-blocking-first-paint"].helpText}</div>
          </div>

          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">DOM Size</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["dom-size"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["dom-size"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["dom-size"].helpText}</div>
          </div>


          <div className="lhMetric">
            <div className="lhEntry">
              <div className="lhKey">Speed Index</div>
              <div className="lhScore">{this.props.state.reacteerState.lighthouseData["speed-index-metric"].score}</div>
              <div className="lhValue">{this.props.state.reacteerState.lighthouseData["speed-index-metric"].displayValue}</div>
            </div>
            <div className="lhDesc">{this.props.state.reacteerState.lighthouseData["speed-index-metric"].helpText}</div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
