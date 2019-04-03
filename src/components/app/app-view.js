import React, { Component } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import withAuth from '../withAuth';
import Home from '../pages/home';
import {Chart} from '../pages/chart';
import {Login} from '../pages/login';

import './app.css'

export default class App extends Component {

    render() {
        return (
            <div>
                <ul className="nav-list">
                    <li className="nav-list__item"><Link to="/">Home</Link></li>
                    <li className="nav-list__item"><Link to="/chart">Chart</Link></li>
                    <li className="nav-list__item"><Link to="/login">Login</Link></li>
                </ul>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/chart" component={withAuth(Chart)} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}
