import {FETCH_OWNTASKS} from "../action/api";

export default (state=[],action)=>{
  switch (action.type){
    case
      FETCH_OWNTASKS:
      return state,action.payload;
    default:
      return state;
  }
}