import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Match } from 'react-router-dom';

class App extends Component {
    render () {
       return <div className="container">
            <BrowserRouter>
                <Route pattern="/" component={Home} />
            </BrowserRouter>
       </div>
    }
}

export default App;