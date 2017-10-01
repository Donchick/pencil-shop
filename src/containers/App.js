import React, { Component } from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router';
import PencilFormPage from './PencilFormPage';


class App extends Component {
    render () {
       return <div className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pencils/new" component={PencilFormPage} />
            <Route path="/pencil/:_id" component={PencilFormPage} />
        </Switch>
       </div>
    }
}

export default App;