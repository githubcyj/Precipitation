/**
 * 应用根目录
 */

import React from 'react'
/* browserroute 和 hashroute 的区别是是否加上#*/
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'

import Admin from './pages/admin/admin';

const Routers = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={Admin} />
            </Switch>
        </Router>
    );
};

export default Routers;