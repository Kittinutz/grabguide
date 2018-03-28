import {TRIP_SELECTED} from "../action/api";

const initailstate = {
    isFetchTripselected:false,
};


export default function (state=initailstate,action) {
    switch (action.type){
        case
        TRIP_SELECTED:
            return {...state,isFetchTripselected:true}

        default:
            return state
    }
    return state
}