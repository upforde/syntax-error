import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Data from '../data.json';

class FlipButton extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      data: {}
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.props.changeFlippable();
  }
  
  flipAndCalculate = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    //calculate();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.props.changeFlippable();
  }

  calculate(){
    switch(this.props.buttonID){
      case "quiz":
        break;
      case "screenshot":
        break;
      case "audience":
        break;
      case "multiple":
        break;
      case "music":
        break;
      case "crew":
       break;
      case "silhouette":
        break;
      case "sologame":
        break;    
      default:
        break;  
    }
  }

  componentDidMount = () => {
    for(let i in Data){
      if(this.props.buttonID === Data[i].key){
        this.setState({
          data: Data[i].data
        });
      }
    }
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
              <Button variant="success" className="areYouSureAboutThatObject">Yes</Button>
              <Button variant="danger" className="areYouSureAboutThatObject" onClick={ this.handleClick }>No</Button>
            </div>
          </div>
        </ReactCardFlip>
      </nav>
    )
  }
}

export default FlipButton;


