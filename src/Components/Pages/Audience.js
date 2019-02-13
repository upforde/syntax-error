import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Audience(props){
    return(
        <div>
            <p>Lorem Ipsum Audience</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      audience: state.audience
    }
  }
export default connect(mapStateToProps)(Audience);