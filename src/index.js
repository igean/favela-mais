import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dash from './dash';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/inicio" component={Dash} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)