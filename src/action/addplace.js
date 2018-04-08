
import {
  ADDTO_ARRAY,
  FILTER_PLACE
} from "./api";

export function addplace(id,callback) {
  return dispatch=>{
    dispatch({
      payload:id,
      type:FILTER_PLACE
    },callback)
  }
}
export function addtoarray(payload,callback) {
  return dispatch=>{
    dispatch({
      payload:payload,
      type:ADDTO_ARRAY,
    },callback)
  }
  
}