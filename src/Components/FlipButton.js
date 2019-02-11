import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';

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
      <nav className="button">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">
            <img src={this.props.imgURL} onClick={this.handleClick} className="Button-logo" alt="logo" />
          </div>
          <div key="back">
            <div className="areYouSureAboutThat">
              <Button variant="success" className="areYouSureAboutThatObject">Yes</Button>
              <Button variant="danger" className="areYouSureAboutThatObject" onClick={this.handleClick}>No</Button>
            </div>
          </div>
        </ReactCardFlip>
      </nav>
    )
  }
}

export default FlipButton;


