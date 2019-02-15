import React, { Component } from 'react'

class AudioPlayer extends Component {
  render() {
    return (
        <audio ref="audio_tag" src={this.props.source} controls pause/>
    );
  }
}

export default AudioPlayer;