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
          <img className="challenge_img" src="./icons/quiz_challenge.jpg" alt="" ></img>
          <h1 className="challenge_title">{this.state.current.question}</h1>
          <p className="reveal_answer">{(this.state.answer)?this.state.current.answer:null}</p>
          <div className="button_wrapper">
            <Button className="challenge_button answer_button" onClick={this.handleClick}>Reveal answer</Button>
            <WrappedLink className="challenge_button go_home" to='/' text="Go Home" />
          </div>
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