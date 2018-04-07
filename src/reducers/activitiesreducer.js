import {API_ACTIVITIES} from "../action/api";

export default function (state = [], action) {
    switch (action.type) {
        case
        API_ACTIVITIES:
            return action.payload
        default:
            return false;
    }

    return state;
}