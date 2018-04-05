
import {BOOKING_QUERYBYID} from "../action/api";

export default (state=[], action)=>{
    switch (action.type){
        case
            BOOKING_QUERYBYID:
            return action.payload
        default:
            return state
    }
    return state
}