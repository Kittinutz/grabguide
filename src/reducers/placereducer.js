import {API_PLACE} from '../action/api';

export default function (state = {}, action) {
    switch (action.type){
        case
            API_PLACE:
            return {...state,places:action.payload}
        default:
            return state
    }
    return state;
}