import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Projects from './pages/Projects/Projects';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/projects' exact component={Projects}/>
        </Switch>
    );
};

