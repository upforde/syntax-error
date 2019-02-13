import React from 'react';
import { connect } from 'react-redux';
import WrappedLink from '../WrappedLink';

function Quiz(props){
    return(
        <div>
            <p>Lorem Ipsum Quiz</p>
            <WrappedLink to='/' text="Go Home" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      quiz: state.quiz
    }
  }
export default connect(mapStateToProps)(Quiz);