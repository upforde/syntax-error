import React, { Component } from 'react'
import { connect } from 'react-redux'
import WrappedLink from '../WrappedLink'
import Data from '../../data.json'
import Button from 'react-bootstrap/Button'
import _ from 'underscore'
import AudioPlayer from '../AudioPlayer'


class Music extends Component{
  constructor(){
    super()
    this.state = {
      directory: './Songs/',
      current: {},
      answer: false
    }
  }

  handleClick = () => {
    this.setState({
      answer: true
    })
  }

  componentDidMount = () => {
    const random = (Math.floor(Math.random() * _.size(Data[4].data)) + 1);
    if(!_.contains(this.props.music, Data[4].data[random])){
      this.props.addUsed(Data[4].data[random]);
      this.setState({
        current: Data[4].data[random]
      })
    }
  }

  render(){
    console.log(this.state.current.name)
    return(
        <div>
            <h1>{(this.state.answer)?this.state.current.name:"???"}</h1>
            <AudioPlayer source={this.state.directory + this.state.current.name}/><br />
            <Button onClick={this.handleClick}>Answer</Button>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      music: state.music
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "music" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music)