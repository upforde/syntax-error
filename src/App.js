import React from 'react';

import Grid from './Components/Grid';
import Header from './Components/Header';
import FlipButton from './Components/FlipButton';
import imgURLS from './Components/imgURLS.json';
import './index.css';

class App extends React.Component {
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


export default App;