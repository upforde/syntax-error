import React from 'react';

import Grid from './Components/Grid';
import Header from './Components/Header';
import FlipButton from './Components/FlipButton';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <main>
                <Header header='./icons/syntax_error_logo_only.png'/>
                <Grid>
                    <FlipButton imgURL='./icons/quiz_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/screenshot_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/audience_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/multiply_choice_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/music_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/crew_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/silhouette_challenge_thumbnail.jpg'/>
                    <FlipButton imgURL='./icons/sologame_challenge_thumbnail.jpg'/>
                </Grid>
            </main>
        )
    }
}


export default App;