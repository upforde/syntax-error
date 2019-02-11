import React from 'react';

import Grid from './Components/Grid';
import Header from './Components/Header';
import FlipButton from './Components/FlipButton';
import imgURLS from './imgURLS';
import './index.css';

function App(){
    const buttons = Array.from(imgURLS).map(imgData => <FlipButton key={imgData.key} imgURL={imgData.imgURL} />);

    return(
        <main>
            <Header header='./icons/syntax_error_logo_only.png'/>
            <Grid>
                {buttons}
            </Grid>
        </main>
    )
}


export default App;