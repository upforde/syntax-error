import React from 'react';

import Grid from './Grid';
import Header from './Header';
import FlipButton from './FlipButton';
import imgURLS from './imgURLS.json';
import '../index.css';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            buttonData: Array.from(imgURLS),
            isFlippable: true
        };
        this.changeFlippable = this.changeFlippable.bind(this);
    }

    assignButtons(){
        return this.state.buttonData.map(imgData =>
            <FlipButton
                key={ imgData.key } 
                buttonID={ imgData.key } 
                imgURL={ imgData.imgURL }
                changeFlippable={ this.changeFlippable }
                isFlippable={ this.state.isFlippable }
            />);
    }

    changeFlippable(e) {
        this.setState(prevState => ({ isFlippable: !prevState.isFlippable }));
    }

    render(){
        return(
            <main>
                <Header header='./icons/syntax_error_logo_only.png'/>
                <Grid>
                    {this.assignButtons()}
                </Grid>
            </main>
        )
    }
}


export default Home;