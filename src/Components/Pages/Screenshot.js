import React, { Component } from 'react'
import { connect } from 'react-redux'
import WrappedLink from '../WrappedLink'
import Data from '../../data.json'
import _ from 'underscore'

class Screenshot extends Component{
  constructor(){
    super()
    this.state = {
      directory: './Screenshots/',
      current: {}
    }
  }

  handleClick = () => {
    console.log(this.props.screenshot)
  }
  
  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[1].data)) + 1)
    if(!_.contains(this.props.screenshot, Data[1].data[random])){
      this.props.addUsed(Data[1].data[random])
      this.setState({
        current: Data[1].data[random]
      })
    }
  }

  render() {
    return(
      <div>
        <h1 style = {{color: 'white'}}>Guess the picture!</h1>
        <img src={ this.state.directory + this.state.current.name } style={{height: '50%', width: '50%' }} alt="Screenshot from a game"></img>
        <WrappedLink to='/' text="Go Home" />
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
    return{
      screenshot: state.screenshot
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "screenshot" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Screenshot)