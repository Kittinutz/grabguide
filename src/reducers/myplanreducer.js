import {ADD_CHILDREN, ADDTO_ARRAY, DELETE_PLACE, ADD_ADULT, ADD_APPOINTMENT, ADD_NAME} from "../action/api";

const initailState ={
  name:false,
    appointment:false,
    adult:false,
    children:false,
    haschilde:false,
    meetinglocation:false,
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
      case
        ADD_CHILDREN:
        console.log(typeof action.payload)
        return {...state,children:action.payload};
      case
        ADD_ADULT:
        return {...state,adult:action.payload};
      case
        ADD_APPOINTMENT:
        return {...state,appointment:action.payload};
      case
        ADD_NAME:
        return {...state,name:action.payload};
        
        
      return {...state,place:newPlace}
        
        default:
            return state
    }
}