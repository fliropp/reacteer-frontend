import React, {Component,Proptypes} from 'react';
import '../css/Screenshots.css';

export default class Screenshots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll:false,
      sections : ['', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi'],
      idx: 0,
    };
    this.scrollDone = this.scrollDone.bind(this);
  }

  componentDidMount() {
    const el = this.refs.button;
    el.addEventListener('animationend', this.scrollDone);
  }
  componentWillUnmount () {
  	const el = this.refs.button
		el.removeEventListener('animationend', this.scrollDone)
	}

  scrollDone () {
    this.setState({
      scroll:false,
      idx: this.state.idx + 1
    });
  }


  render() {
    const scroll = this.state.scroll;
    return (
      <div className="screenshot">
        <button ref='button' onClick={() => this.setState({scroll:true})}>Scrollway to Hell</button>
        <img className={scroll? 'scroll':''} src={new Image().src ='/images/klikk_' + this.state.sections[this.state.idx] + '.png'}/>
      </div>
    );
  }
}
