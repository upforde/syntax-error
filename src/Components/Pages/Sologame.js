import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../data.json'
import _ from 'underscore'
import WrappedLink from '../WrappedLink'

class Sologame extends Component{
  constructor(){
    super()
    this.state = {
      current: {}
    }
  }

  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[7].data)) + 1);
    if(!_.contains(this.props.sologame, Data[7].data[random])){
      this.props.addUsed(Data[7].data[random])
      this.setState({
        current: Data[7].data[random]
      })
    }
  }

  render(){
    return(
        <div>
          <img className="challenge_img" src="./icons/sologame_challenge.jpg" alt="" ></img>
          <p className="challenge_title">GAME: {this.state.current.gamename}</p>
          <p className="challenge_objective">{(this.state.current.objective !== "")? "OBJECTIVE: " + this.state.current.objective: null}</p>
          <div className="button_wrapper">
            <WrappedLink to='/' text="Go Home" />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      sologame: state.sologame
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "sologame" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sologame)