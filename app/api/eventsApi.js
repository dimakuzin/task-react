/**
 * Created by Dima on 21.08.2016.
 */
import axios from 'axios';
import store from '../store';
import { getEventsSuccess, getDetailEventSuccess } from '../actions/eventsActions';

export function getEvents() {
	return axios.get('http://api.itboost.org:88/app_dev.php/api/community.getAll')
		.then(response => {
			store.dispatch(getEventsSuccess(response.data.response.items));
			return response;
		});
}

export function getEvent(eventId) {
	return axios.get('http://api.itboost.org:88/app_dev.php/api/community.get?community_id=' + eventId)
		.then(response => {
			store.dispatch(getDetailEventSuccess(response.data.response));
			return response;
		});
}