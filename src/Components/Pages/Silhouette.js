import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Silhouette(props){
    return(
        <div>
            <p>Lorem Ipsum Silhouette</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      silhouette: state.silhouette
    }
  }
export default connect(mapStateToProps)(Silhouette);