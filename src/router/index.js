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
                <LayoutCss>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />>
                        <Route exact path="/posts/:id" component={PostContainer} />>
                        <Route exact path="/videos/:id" component={VideoContainer} />>
                    </Switch>
                </LayoutCss>
            </Router>
        )
    }
}
export default RouterIndex