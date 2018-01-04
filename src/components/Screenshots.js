import React, {Component} from 'react';
import '../css/Screenshots.css';

export default class Screenshots extends Component {
  constructor(props) {
    super(props);
    this.scrollDone = this.scrollDone.bind(this);
    this.scrollIteration = this.scrollIteration.bind(this);
    this.scrollStart = this.scrollStart.bind(this);
  }

  componentDidMount() {
    const el = this.refs.kpage;
    el.addEventListener('animationend', this.scrollDone);
    el.addEventListener('animationiteration', this.scrollIteration);
    el.addEventListener('animationstart', this.scrollStart);
  }

  componentWillUnmount () {
  	const el = this.refs.kpage
		el.removeEventListener('animationend', this.scrollDone);
    el.removeEventListener('animationiteration', this.scrollIteration);
    el.removeEventListener('animationstart', this.scrollStart);

	}

  scrollStart () {
    this.props.fuff(this.props.reacteerState.sections[this.props.reacteerState.idx]);
    this.props.slhd(this.props.reacteerState.sections[this.props.reacteerState.idx]);
  }

  scrollDone () {
    this.props.resetIndex();
  }

  scrollIteration () {
    this.props.incIndex();
    this.props.fuff(this.props.reacteerState.sections[this.props.reacteerState.idx]);
    this.props.slhd(this.props.reacteerState.sections[this.props.reacteerState.idx]);
  }

  render() {
    return (
      <div className="screenshot">
        <img className='scroll' ref='kpage' src={new Image().src ='/images/klikk_' + this.props.reacteerState.sections[this.props.reacteerState.idx] + '.png'}/>
      </div>
    );
  }
}
