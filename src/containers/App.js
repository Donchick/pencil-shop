import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router';
import PencilFormPage from './PencilFormPage';
import PencilDetailsPage from './PencilDetailsPage'


const App = (props) => {
    return <div className="container">
        <div className="welcome-top-element">Welcome to Jim's pencil store!</div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pencils/new" component={PencilFormPage} />
            <Route exact path="/pencil/:_id" component={PencilFormPage} />
            <Route exact path="/pencil/details/:_id" component={PencilDetailsPage} />
        </Switch>
    </div>
}

export default App;