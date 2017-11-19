import React, {Component,Proptypes} from 'react';

export default class Screenshots extends Component {
  constructor(props) {
    super(props);
    this.state = { ends:
      {
        frontend:NaN,
        backend:NaN
      }
    };
  }

  componentDidMount() {
    fetch('/reacteer')
      .then(res => res.json())
      .then(ends => this.setState({ends}));
  }




  render() {
    return (
      <div className="reacteerTest">
        <p>frontend: {this.state.ends.frontend}</p>
        <p>backend: {this.state.ends.backend}</p>
        <img src="/img"/>
      </div>
    );
  }
}
