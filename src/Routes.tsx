import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GoodCard from './pages/GoodCard';
import EvilCard from './pages/EvilCard';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route path={ process.env.PUBLIC_URL + "/"} exact>
                <Home/>
            </Route>
            <Route path={ process.env.PUBLIC_URL + "/Evil"}>
                <EvilCard/>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/Good"}>
                <GoodCard/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;