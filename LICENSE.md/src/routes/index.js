import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Client from './Client'

export default() => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/client" exact component={Client} />
        </Switch>
    </BrowserRouter>
);