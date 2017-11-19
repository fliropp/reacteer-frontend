import React, {Component,Proptypes} from 'react';
import '../css/Screenshots.css';

export default class Screenshots extends Component {
  constructor(props) {
    super(props);
    this.state = { img:
      {
        src:'NaN'
      }
    };
  }

  componentDidMount() {
    fetch('/imgages/klikk_.png')
      .then(res => res.blob())
      .then(imgBlob => {
        let objectURL = URL.createObjectURL(imgBlob);
        this.setState({img: {src: objectURL}})}
      );
  }




  render() {
    return (
      <div className="screenshot">
        <img className="shimg" src={new Image().src ="/images/klikk_.png"}/>
      </div>
    );
  }
}
