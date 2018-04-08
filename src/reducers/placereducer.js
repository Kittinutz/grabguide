import {API_PLACE, API_PLACEBYACTIVITIES,FILTER_PLACE} from '../action/api';

export default function (state = [], action) {
    switch (action.type){
        case
            API_PLACE:
            return {...state,places:action.payload};
        case
                API_PLACEBYACTIVITIES:
            return state = action.payload;
      case
        FILTER_PLACE:
            console.log(state);
        return state;
        default:
            return state
    }
    return state;
}