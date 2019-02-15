import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import Button from 'react-bootstrap/Button'
import WrappedLink from './WrappedLink'

class FlipButton extends Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    this.props.changeFlippable()
  }
  
  flipAndCalculate = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    this.props.changeFlippable()
  }
 
  render() {
    return (
      <nav className="button">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">
            <img 
              src={this.props.imgURL} 
              onClick={ this.props.isFlippable?this.flipAndCalculate:null } 
              className="Button-logo" 
              alt="logo" 
            />
          </div>
          <div key="back">
            <div className="areYouSureAboutThat">
              <WrappedLink className="buttonComponent" variant="success" to={this.props.buttonID} text="Yes" />
              <div className="buttonComponent" ><Button variant="danger" onClick={ this.handleClick }>No</Button></div>
            </div>
          </div>
        </ReactCardFlip>
      </nav>
    )
  }
}

export default FlipButton;


