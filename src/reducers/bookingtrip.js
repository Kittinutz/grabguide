import {BOOKING_QUERY} from "../action/api";

export default function (state = {}, action) {
    switch (action.type){
        case
            BOOKING_QUERY:
            return action.payload;
        default:
            return state
    }


}