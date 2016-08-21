import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Main from './components/layouts/main';

import EventsListContainer from './components/containers/eventsListContainer';
import EventDetailContainer from './components/containers/datailEventContainer';

export default (
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" >
				<IndexRoute component={EventsListContainer}/>
				<Route path=":eventId" component={EventDetailContainer}/>
			</Route>
		</Route>
	</Router>
);