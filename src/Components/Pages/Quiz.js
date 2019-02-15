import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../data.json'
import _ from 'underscore'
import WrappedLink from '../WrappedLink'
import Button from 'react-bootstrap/Button';

class Quiz extends Component{
  constructor(){
    super()
    this.state = {
      current: {},
      answer: false
    }
  }

  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[0].data)) + 1);
    if(!_.contains(this.props.quiz, Data[0].data[random])){
      this.props.addUsed(Data[0].data[random])
      this.setState({
        current: Data[0].data[random]
      })
    }
  }

  handleClick = () => {
    this.setState({
      answer: true
    })
  }

  render(){
    return(
      <div>
          <p>{this.state.current.question}</p>
          <p>{(this.state.answer)?this.state.current.answer:null}</p>
          <Button onClick={this.handleClick}>Reveal answer</Button>
          <WrappedLink to='/' text="Go Home" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      quiz: state.quiz
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "quiz" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);