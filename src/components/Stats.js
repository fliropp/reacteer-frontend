import React, {Component,Proptypes} from 'react';
import '../css/Stats.css';

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch('/json/_.json')
    .then(data => {
      return data.json();
    })
    .then(json => {
      let urlentries = json.map((entry) => {
        return(
          <div className='urlentries'>
            <div className='urlentry'>
              <p className='urltxt'>link txt: {entry[0]}</p>
              <p className='url'>url: {entry[1]}</p>
              <p className='status'>http status: {entry[2]}</p>
            </div>
          </div>
        )
      });
      this.setState({urlentries:urlentries});
    });
  }

  render() {
    return (
      <div className="stats">
        {this.state.urlentries}
      </div>
    );
  }
}
