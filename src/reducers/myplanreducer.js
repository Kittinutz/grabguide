import {ADDTO_ARRAY, DELETE_PLACE} from "../action/api";

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
      case
          DELETE_PLACE:
        const newPlace =  state.place.filter(data=>data.id!=action.payload);
        
        
      return {...state,place:newPlace}
        
        default:
            return state
    }
}