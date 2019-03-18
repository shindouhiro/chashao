import React from 'react';
import { Router, Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { PrivateRoute, history } from '../until/routerUtils';

class RouterIndex extends React.Component {
    render() {
        return(
            <Router  history={history}>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />>
                </Switch>
            </Router>
        )
    }
}
export default RouterIndex