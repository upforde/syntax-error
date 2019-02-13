import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Sologame(props){
  console.log(props.sologame)
    return(
        <div>
            <p>{props.sologame.gamename}</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      sologame: state.sologame
    }
  }
export default connect(mapStateToProps)(Sologame);