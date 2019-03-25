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
          <img className="challenge_img" src="./icons/audience_challenge.jpg" alt="" ></img>
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
      audience: state.audience
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "audience" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audience)