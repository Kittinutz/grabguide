import {
  ADD_CHILDREN, ADDTO_ARRAY, DELETE_PLACE, ADD_ADULT, ADD_APPOINTMENT, ADD_NAME,
  ADD_LANGUAGES
} from "../action/api";
import moment from 'moment';

const initailState ={
    name:false,
    appointment:false,
    adult:1,
    children:0,
    haschilde:false,
    meetinglocation:false,
    place:[],
    languages:[]
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
      case
          ADD_LANGUAGES:
        return {...state,languages:action.payload}
        
      
        
        default:
            return state
    }
}