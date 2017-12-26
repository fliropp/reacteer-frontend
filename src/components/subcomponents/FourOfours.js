import React, {Component,Proptypes} from 'react';

export default class FourOfours extends Component {

  fofList(data) {
    return data.map((x) => {
      if(x[2] !== 200 && typeof x[2] !== 'object'){
        return(
          <div className='urlentry'>
            <p className='urltxt'>link txt: {x[0]}</p>
            <p className='url'>url: {x[1]}</p>
            <p classNamttp className="urlstatus">status: {typeof x[2] !== 'object'? x[2] : 'exception: not recognized as link!'}</p>
          </div>
        );
    }
    });
  }

  fofCount(data) {
    return data.filter(x => x[2] !== 200 && typeof x[2] !== 'object').length;
  }

  render() {
    return (
      <div className="fof">
        <div className="fofHeader">404 STATS</div>
        <div className="fofCount"><p>Number of non 200 OK: {this.fofCount(this.props.state.reacteerState.urlentries)}</p></div>
        <div className="fofList">{this.fofList(this.props.state.reacteerState.urlentries)}</div>
      </div>
    );
  }
}
