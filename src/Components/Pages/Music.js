import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Music(props){
    return(
        <div>
            <p>Lorem Ipsum Music</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      music: state.music
    }
  }
export default connect(mapStateToProps)(Music);