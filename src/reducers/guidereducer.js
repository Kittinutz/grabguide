import {API_GUIDE} from '../action/api';

export default function (state = {}, action) {
    switch (action.type) {
        case
        API_GUIDE:
            return {...state,guides:action.payload}
    }
    return state;
}
