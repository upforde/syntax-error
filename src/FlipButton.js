import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';

class FlipButton extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <div className="button">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">
            <img src={this.props.logo} onClick={this.handleClick} className="Button-logo" alt="logo" />
          </div>
          <div key="back">
            <img src={this.props.logo} onClick={this.handleClick} className="Button-logo" alt="logo"/>
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default FlipButton;


