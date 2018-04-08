import {ADDTO_ARRAY} from "../action/api";

const initailState ={
    appointment:null,
    person:null,
    haschilde:false,
    meetinglocation:null,
    place:[],
}
export default (state=initailState,action)=>{
    switch (action.type){
      case
      ADDTO_ARRAY:
        state.place.push(action.payload);
        return state;
        
        default:
            return state
    }
}