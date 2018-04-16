
import {FETCH_LANGUAGES} from "../action/api";

export default (state=[], action) =>{
  switch (action.type){
    case
      FETCH_LANGUAGES:
      return state,action.payload
    default:
      return state
  }
}