import React from 'react';
import { connect } from 'react-redux';
import EventList from '../views/eventList';
import * as eventsApi from '../../api/eventsApi';
// import store from '../../store';
// import { loadSearchLayout } from '../../actions/search-layout-actions';

const EventListContainer = React.createClass({

	componentDidMount: function() {
		eventsApi.getEvents();
		// store.dispatch(loadSearchLayout('users', 'User Results'));
	},

	render: function() {
		return (
			<EventList events={this.props.events}/>
		);
	}

});

const mapStateToProps = function(store) {
	return {
		events: store.eventsReducer.events
	};
};

export default connect(mapStateToProps)(EventListContainer);
