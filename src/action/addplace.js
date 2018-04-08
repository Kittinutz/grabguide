
import {
  ADDTO_ARRAY,
  FILTER_PLACE,
  DELETE_PLACE
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

export function Delete(id) {
  return dispatch=>{
    dispatch({
      type:DELETE_PLACE,
      payload:id
    })
  }
  
}