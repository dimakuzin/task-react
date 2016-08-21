import * as types from './actionTypes';

export function getEventsSuccess(events) {
	return {
		type: types.GET_EVENTS_SUCCESS,
		events
	};
}

export function getDetailEventSuccess(event) {
	return {
		type: types.GET_DETAIL_EVENT_SUCCESS,
		event
	};
}