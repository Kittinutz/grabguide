import {API_PLACE, API_PLACEBYACTIVITIES} from '../action/api';

export default function (state = {}, action) {
    switch (action.type){
        case
            API_PLACE:
            return {...state,places:action.payload}
        case
                API_PLACEBYACTIVITIES:
            return action.payload
        default:
            return state
    }
    return state;
}