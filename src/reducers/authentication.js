import {AUTH_USER, FETCH_USER, UNAUTH_USER} from "../action/type";

const initailstate = {
    isAuth:false,

};
export default function (state=initailstate,action) {
    switch (action.type){
        case
            AUTH_USER:
            return {...state,isAuth:true};
        case
            FETCH_USER:
            return {...state,user:action.payload};
      case UNAUTH_USER:
          return {...state,isAuth:false};
     
    }
    return state;

}