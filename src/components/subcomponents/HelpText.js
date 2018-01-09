import React, {Component} from 'react';

export default class HelpText extends Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
    if(this.state.isHovering){
      this.props.setHelpText("", this.props.name);
    }else{
      this.props.setHelpText(this.props.state.txt, this.props.state.name);
    }
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className="lhDescWrapper">
        <div className="lhDesc" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>WTF...?</div>
      </div>
    );
  }

}
