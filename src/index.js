import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import App from './App';
import NPort from './NPort';
import NCen from './NCen';

ReactDOM.render(<App />, document.getElementById('root'));
/*
ReactDOM.render((
	<Router history = {browserHistory}>
  		<Route path = "/" component = {App}>
  			<IndexRoute component={App}/>
  			<Route path="nPort" component={NPort} />
      		<Route path="nCen" component={NCen} />
      	</Route>
   </Router>
), document.getElementById('root')); */