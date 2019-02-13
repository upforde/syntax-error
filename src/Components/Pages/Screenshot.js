import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Screenshot(props){
    return(
        <div>
            <p>Lorem Ipsum Screenshot</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      screenshot: state.screenshot
    }
  }
export default connect(mapStateToProps)(Screenshot);