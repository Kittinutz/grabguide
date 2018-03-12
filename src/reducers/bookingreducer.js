import {STEP1_SUBMIT} from "../action/api";

export default function (state = {}, action) {
    switch (action.type) {
        case
        STEP1_SUBMIT:
            return {...state, name: action.payload.name, surname: action.payload.surname, email: action.payload.email};
        default:
            return state;
    }
    return state;
}