import React, {Component} from 'react';
import '../css/ReacteerHead.css';

export default class ReacteerHead extends Component {


  toggleStats() {
    this.props.toggleStats();
  }

  getSiteList(sites) {
    let img_style = '';
    return this.props.reacteerState.sections.map((site) => {
      img_style = this.props.reacteerState.sections[this.props.reacteerState.idx] === site? {backgroundColor:'#b3cccc'} : {backgroundColor:'#527a7a'};
      return(
      <div className="siteListing" style={img_style}>
      <p className="siteName">{site}</p>
      <div className="siteFavicon">
        <img src={new Image().src ='/favicons/' + site + '.png'}/>
      </div>
      </div>
      );
    });
  }

  render() {
    return (
      <div className="ReacteerHead">
        <img className="reacteerIcon" src="/ricon.png" height='50px'/>
        <div className="toggleStatsButton">
          <button onClick= {() => this.toggleStats()}>{this.props.reacteerState.showStats? 'hide stats': 'show stats'}</button>
        </div>
        <div className="siteList">
          {this.getSiteList()}
        </div>
      </div>
    );
  }
}
