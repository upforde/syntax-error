import React from 'react'

function Fourway(props){
    return(
        <div className={ props.className } onClick={ props.onClick }>
            <div>{ props.answer }</div>
        </div>
    )
}
export default Fourway