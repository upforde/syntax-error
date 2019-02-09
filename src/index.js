/*React imports*/
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*Object imports*/
import Grid from './Grid'
import Header from './Header'
import FlipButton from './FlipButton'

/*CSS imports */
import './index.css';

ReactDOM.render(
    <div>
    <Header header='./icons/header.jpg'/>
    <Grid>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
        <FlipButton logo='./icons/logo.svg'/>
    </Grid></div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
