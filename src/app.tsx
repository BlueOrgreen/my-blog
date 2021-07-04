import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { homeRoutes } from './router';
import classnames  from 'classnames';
import Light from './components/Light';
import Header from './components/Header';
import 'antd/dist/antd.css';
import './index.less'

const incrementAction = {type: 'INCREMENT', count: 2}
const reduceAction = {type: 'REDUCE', count: 1}

interface AppProps {
    moon: boolean;
    night: boolean;
    count: number;
    increment: () =>void;
    decrement: () =>void;
}

class App extends React.Component<AppProps & RouteComponentProps>{

    componentDidMount() {
        console.log('homeRoutes', homeRoutes);
        console.log(this.props);
    }

    render() {      
        const {moon, night} = this.props;
        const lightStatusProps = {
            moon,
            night,
        };
        return (
            <div id="index">
                <div className={classnames({moon})}></div>
                <div className={classnames({night})}></div>
                <Light />
                <Header />
                <Switch>
                    {homeRoutes.map((route) => 
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            render={routeProps =>
                                <route.component {...routeProps} {...lightStatusProps} />
                            }
                        />
                    )}
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        moon: state.moon,
        night: state.night,
        count: state.count,
    };
  };

const mapDispatchToProps = (dispatch: any) => {  
    return (
        {
            increment: () => dispatch(incrementAction),
            decrement: () => dispatch(reduceAction)
        })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);