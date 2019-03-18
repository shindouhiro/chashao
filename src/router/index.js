import React from 'react';
import { Router, Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { PrivateRoute, history } from '../until/routerUtils';
import LayoutCss from '../components/Layout';

class RouterIndex extends React.Component {
    render() {
        return(
            <Router  history={history}>
                <LayoutCss>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />>
                    </Switch>
                </LayoutCss>
            </Router>
        )
    }
}
export default RouterIndex