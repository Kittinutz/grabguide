import {TRIP_SELECTED} from "../action/api";

export default function (state = {}, action) {
    switch (action.type) {
        case
        TRIP_SELECTED:
            return action.payload
        default:
            return state
    }
    return state
}