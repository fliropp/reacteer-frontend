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

  getObjectFit() {
    return this.props.reacteerState.showStats ? 'contain' : 'none';
  }


  render() {
    let screenshot_style = {width: this.props.reacteerState.showStats ? '60%' : '100%', height : 'auto'}
    let img_style = {width: this.props.reacteerState.showStats ? '95%' : '85%', height : 'auto'}
    return (
      <div className="screenshot" style={screenshot_style}>
        <img className='scroll' ref='kpage' style={img_style}src={new Image().src ='/images/' + this.props.reacteerState.sections[this.props.reacteerState.idx] + '.png'}/>
      </div>
    );
  }
}
