import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Audience from './Components/Pages/Audience';
import Crew from './Components/Pages/Crew';
import Multiple from './Components/Pages/Multiple';
import Music from './Components/Pages/Music';
import Quiz from './Components/Pages/Quiz';
import Screenshot from './Components/Pages/Screenshot';
import Silhouette from './Components/Pages/Silhouette';
import Sologame from './Components/Pages/Sologame';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/audience' component={Audience} />
                    <Route path='/crew' component={Crew} />
                    <Route path='/multiple' component={Multiple} />
                    <Route path='/music' component={Music} />
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/screenshot' component={Screenshot} />
                    <Route path='/silhouette' component={Silhouette} />
                    <Route path='/sologame' component={Sologame} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;