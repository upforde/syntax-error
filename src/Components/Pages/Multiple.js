import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Multiple(props){
    return(
        <div>
            <p>Lorem Ipsum Multiple</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      multiple: state.multiple
    }
  }
export default connect(mapStateToProps)(Multiple);