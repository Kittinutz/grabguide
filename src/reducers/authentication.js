import {AUTH_USER} from "../action/type";

const initailstate = {
    isAuth:false,

};
export default function (state=initailstate,action) {
    switch (action.type){
        case
            AUTH_USER:
            return {...state,isAuth:true};
        default:
            return state;
    }
    return state;

}