import {
  ADDTO_ARRAY,
  FILTER_PLACE,
  DELETE_PLACE,
  ADD_CHILDREN,
  ADD_ADULT, ADD_APPOINTMENT,ADD_NAME
} from "./api";

export function addplace(id, callback) {
  return dispatch => {
    dispatch({
      payload: id,
      type: FILTER_PLACE
    }, callback)
  }
}

export function addtoarray(payload, callback) {
  return dispatch => {
    dispatch({
      payload: payload,
      type: ADDTO_ARRAY,
    }, callback)
  }
  
}

export function Addchildren(number) {
  return dispatch => {
    dispatch({
      type: ADD_CHILDREN,
      payload: number
    })
  }
}
export function AddAdult(number) {
  return dispatch => {
    dispatch({
      type: ADD_ADULT,
      payload: number
    })
  }
}
export function Addname(value) {
  return {
    type:ADD_NAME,
    payload:value
  }
}
export function AddAppointment(data) {
  return {
    type: ADD_APPOINTMENT,
    payload:data
  }
  
}
export function Delete(id) {
  return dispatch => {
    dispatch({
      type: DELETE_PLACE,
      payload: id
    })
  }
  
}
export function CreatTask(payload){
  return async dispatch =>{
    const token = localStorage.getItem('token');
    console.log('token is:',token)
    console.log('payload is:',payload)
  }
}