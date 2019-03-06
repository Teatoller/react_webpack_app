import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import '../public/css/style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                    <Route exact={true} path='/' component={HomeComponent} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
