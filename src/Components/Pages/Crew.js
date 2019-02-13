import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Crew(props){
    return(
        <div>
            <p>Lorem Ipsum Crew</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      crew: state.crew
    }
  }
export default connect(mapStateToProps)(Crew);