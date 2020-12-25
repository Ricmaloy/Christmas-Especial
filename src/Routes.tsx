import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import GoodCard from './pages/GoodCard';
import EvilCard from './pages/EvilCard';
import Home from './pages/Home';

const Routes = () => (
    <HashRouter >
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="#/Evil">
                <EvilCard/>
            </Route>
            <Route path="#/Good">
                <GoodCard/>
            </Route>
        </Switch>
    </HashRouter>
);

export default Routes;