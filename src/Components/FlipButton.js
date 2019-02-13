import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import WrappedLink from './WrappedLink';
import Data from '../data.json';
import _ from 'underscore';
import { connect } from 'react-redux';

class FlipButton extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      data: {},
      currentElement: 1
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.props.changeFlippable();
    this.props.removeUsed(this.state.data[this.state.currentElement])
  }
  
  flipAndCalculate = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    console.log(this.state.currentElement)
    this.props.changeFlippable();
    this.add(this.state.currentElement);
    console.log(this.props.reduxState)
  }

  calculate = () => {
    let random = Math.floor(Math.random() * _.size(this.state.data)) + 1;
    if(_.contains(this.props.reduxState, this.state.data[random]) === false){
      this.setState({
        currentElement: random
      })
    } else { this.calculate() }
  }

  add = (currentElement) => {
    let current = currentElement
    if(!_.contains(this.props.reduxState, current)){
      this.props.addUsed(this.state.data[current])
    } else { this.add(current++) }
  }

  componentDidMount = () => {
    for(let i in Data){
      if(this.props.buttonID === Data[i].key){
        this.setState({
          data: Data[i].data
        });
      }
    }
    this.calculate();
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.buttonID
  return {
    reduxState: state[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: ownProps.buttonID }),
    removeUsed: (id) => dispatch({ type: "REMOVE_USED", id: id, to: ownProps.buttonID })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlipButton);


