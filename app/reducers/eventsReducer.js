import * as types from '../actions/actionTypes';

const initialState = {
	events: [],
	event: {
		community: {},
		members: {
			items: []
		}
	}
};

const eventsReducer = function(state = initialState, action) {

	switch(action.type) {

		case types.GET_EVENTS_SUCCESS:
			return Object.assign({}, state, { events: action.events });

		case types.GET_DETAIL_EVENT_SUCCESS:
			return Object.assign({}, state, { event: action.event });

	}

	return state;

};

export default eventsReducer;