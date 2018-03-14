import {STEP1_SUBMIT} from "../action/api";

export default function (state = {}, action) {
    switch (action.type) {
        case
        STEP1_SUBMIT:
            return {...state, stepone: {...action.payload}};
        default:
            return {
                ...state, stepone: {
                    tripid: '',
                    name: '',
                    surname: '',
                    email: '',
                    price: 1234,
                    child: 0,
                    adult: 1,
                    priceadult: 1234,
                    pricechild: 1234 / 2,
                    totaladultprice: 1234,
                    totalchildprice: 0,
                    totalprice: 1234,
                    date: ''
                }
            };
            return state;
    }
}