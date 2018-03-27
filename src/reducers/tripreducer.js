import {API_TRIP} from '../action/api';

export default function (state = {}, action) {
    switch (action.type) {
        case
        API_TRIP:
            return action.payload;
        default:
            return state
    }
    return state;
}