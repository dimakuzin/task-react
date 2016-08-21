import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';

var reducers = combineReducers({
    eventsReducer: eventsReducer
});

export default reducers;
