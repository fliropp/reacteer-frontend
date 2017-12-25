import React, {Component,Proptypes} from 'react';

export default class FourOfours extends Component {

  fofList(data) {
    return data.map((x) => {
      if(x[2] !== 200){
        return(
          <div className='urlentry'>
            <p className='urltxt'>link txt: {x[0]}</p>
            <p className='url'>url: {x[1]}</p>
            <p className='status'>http status: {x[2]}</p>
          </div>
        );
    }
    });
  }

  fofCount(data) {
    return data.filter(x => x[2] !== 200).length;
  }


  render() {
    return (
      <div className="fof">
        <div className="fofHeader">404 STATS</div>
        <div className="fofCount">Number of non 200 OK: {this.fofCount(this.props.state.reacteerState.urlentries)}</div>
        <p className="fofListHeader"> Faulty links on page: </p>
        <div className="fofList">{this.fofList(this.props.state.reacteerState.urlentries)}</div>
      </div>
    );
  }
}
