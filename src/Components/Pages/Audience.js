import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../data.json'
import _ from 'underscore'
import WrappedLink from '../WrappedLink'

class Audience extends Component{
  constructor(){
    super()
    this.state = {
      current: {}
    }
  }

  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[2].data)) + 1);
    if(!_.contains(this.props.audience, Data[2].data[random])){
      this.props.addUsed(Data[2].data[random])
      this.setState({
        current: Data[2].data[random]
      })
    }
  }

  render(){
    return(
      <div>
          <h1>Your challenge is</h1>
          <p>Game: {this.state.current.gamename}</p>
          <p>{(this.state.current.objective !== "")? "Objective: " + this.state.current.objective: null}</p>
          <WrappedLink to='/' text="Go Home" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      audience: state.audience
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "audience" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audience)