
import React from 'react';
import { connect } from 'react-redux';
import EventDetail from '../views/eventDetail';
import * as eventsApi from '../../api/eventsApi';


const EventDetailContainer = React.createClass({

	componentDidMount: function() {
		eventsApi.getEvent(this.props.params.eventId);
	},

	render: function() {
		return (
			<EventDetail event={this.props.event}/>
		);
	}

});

const mapStateToProps = function(store) {
	return {
		event: store.eventsReducer.event
	};
};

export default connect(mapStateToProps)(EventDetailContainer);
