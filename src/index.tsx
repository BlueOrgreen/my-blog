import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './app';
import NoFound from './views/404';
import Login from './views/Login';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import { routes } from './router';
import './assets/assets/iconfont/iconfont.css';
import './assets/assets/iconfont2/iconfont.css';
import './assets/assets/iconfont3/iconfont.css';
import './assets/assets/iconfont4/iconfont.css';
import './assets/assets/iconfont5/iconfont.css';



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/home" render={routeProps => <App {...routeProps} />} />
                <Route path="/admin/login" render={routeProps => <Login {...routeProps} />} />
                {/* <Route path="https://github.com/BlueOrgreen/my-blog" /> */}
                <Route path="/404" render={routeProps => <NoFound {...routeProps} />} />
                <Redirect exact to="/home" from="/" />
                {/* <Redirect to="/404" /> */}
            </Switch>
        </Router>
    </Provider>,
    document.querySelectorAll('.root')[0]
)