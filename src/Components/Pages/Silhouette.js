import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../data.json'
import _ from 'underscore'
import WrappedLink from '../WrappedLink'
import Button from 'react-bootstrap/Button'

class Silhouette extends Component{
  constructor(){
    super()
    this.state = {
      directory: './Silhouette/',
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
    const random = (Math.floor(Math.random() * _.size(Data[6].data)) + 1);
    if(!_.contains(this.props.silhouette, Data[6].data[random])){
      this.props.addUsed(Data[6].data[random])
      this.setState({
        current: Data[6].data[random]
      })
    }
  }

  render(){
    return(
        <div>
          <h1>{(this.state.answer)?this.state.current.name:"???"}</h1>
          <img id="image" src={ (this.state.answer)?this.state.directory + this.state.current.color: this.state.directory + this.state.current.black } alt=""></img>
          <br />
          <Button variant="light" onClick={ this.handleClick }>Answer</Button>
          <br />
          <WrappedLink to='/' text="Go Home" />
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    silhouette: state.silhouette
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsed: (id) => dispatch({ type: "ADD_USED", id: id, to: "silhouette" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Silhouette)