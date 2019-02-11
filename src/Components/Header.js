import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <header id="header">
                <img src={this.props.header} className="banner" alt="Header" />
            </header>
        )
    }
}

export default Header;
