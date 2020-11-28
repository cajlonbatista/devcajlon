import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Portifolio from './pages/Portifolio/Portifolio';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/projects' exact component={Portifolio}></Route>
        </Switch>
    );
};

