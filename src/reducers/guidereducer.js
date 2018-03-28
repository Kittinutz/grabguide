import {API_GUIDE} from '../action/api';

export default function (state = {}, action) {
    switch (action.type) {
        case
        API_GUIDE:
            return action.payload
        default:
            return state
    }
    return state;
}
