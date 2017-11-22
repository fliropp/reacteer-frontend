import React, {Component,Proptypes} from 'react';
import '../css/Screenshots.css';

export default class Screenshots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections : ['', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi'],
      idx: 0,
    };
    this.scrollDone = this.scrollDone.bind(this);
    this.scrollIteration = this.scrollIteration.bind(this);
  }

  componentDidMount() {
    const el = this.refs.kpage;
    el.addEventListener('animationend', this.scrollDone);
    el.addEventListener('animationiteration', this.scrollIteration);
  }

  componentWillUnmount () {
  	const el = this.refs.kpage
		el.removeEventListener('animationend', this.scrollDone);
    el.removeEventListener('animationiteration', this.scrollIteration);

	}

  scrollDone () {
    this.setState({
      idx: 0
    });
  }

  scrollIteration () {
    this.setState({
      idx: this.state.idx + 1
    });
  }

  render() {
    return (
      <div className="screenshot">
        <img className='scroll' ref='kpage' src={new Image().src ='/images/klikk_' + this.state.sections[this.state.idx] + '.png'}/>
      </div>
    );
  }
}
