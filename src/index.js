import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import VideoShow from './pages/videoShow';
import PostShow from './pages/postShow';
import Tags from './pages/tags';
import RouterIndex from './router/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterIndex/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
