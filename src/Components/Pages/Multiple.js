import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../data.json'
import _ from 'underscore'
import WrappedLink from '../WrappedLink'
import Fourway from '../Fourway'
import Foursome from '../Foursome'

class Multiple extends Component{
  constructor(){
    super()
    this.state = {
      current: {},
      answers:[],
      isDone: false
    }
  }

  doDone = () => {
    console.log("Clicked!")
    this.setState({
      isDone: true
    })
  }

  assignAnswers = () => {
    return this.state.answers.map(fourwaydata =>
      <Fourway key={ fourwaydata }
        className={ (this.state.isDone)?(fourwaydata===this.state.current.answer)?'answer rightAnswer':'answer wrongAnswer':'answer answer' }
        onClick={ this.doDone }
        answer= { fourwaydata }
      />
    )
  }

  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[3].data)) + 1);
    if(!_.contains(this.props.multiple, Data[3].data[random])){
      this.props.addUsed(Data[3].data[random])
      const arrayWithAnswers = [];
      arrayWithAnswers.push(Data[3].data[random].answer)
      arrayWithAnswers.push(Data[3].data[random].dummy1)
      arrayWithAnswers.push(Data[3].data[random].dummy2)
      arrayWithAnswers.push(Data[3].data[random].dummy3)
      this.setState({
        current: Data[3].data[random],
        answers: _.shuffle(arrayWithAnswers)
      })
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.current.question}</h1>
        <Foursome>
          {this.assignAnswers()}
        </Foursome>
        <WrappedLink to='/' text="Go Home" />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{
      multiple: state.multiple
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "multiple" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiple)