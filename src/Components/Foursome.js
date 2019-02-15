import React, { Component } from 'react'

class Foursome extends Component {
    render(){
        return(
            <section className="fourwayComtainer">
                {this.props.children}
            </section>
        )
    }
}

export default Foursome