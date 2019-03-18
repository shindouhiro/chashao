import React from 'react';
import { Router, Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { PrivateRoute, history } from '../until/routerUtils';
import LayoutCss from '../components/Layout';
import PostContainer from '../containers/postShow';
import VideoContainer from '../containers/videoShow';

class RouterIndex extends React.Component {
    render() {
        return(
            <Router  history={history}>
                <LayoutCss history={history}>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />>
                        <Route exact path="/post" component={PostContainer} />>
                        <Route exact path="/video" component={VideoContainer} />>
                    </Switch>
                </LayoutCss>
            </Router>
        )
    }
}
export default RouterIndex