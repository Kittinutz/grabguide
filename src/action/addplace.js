import axios from 'axios'
import {
  ADDTO_ARRAY,
  FILTER_PLACE,
  DELETE_PLACE,
  ADD_CHILDREN,
  ADD_ADULT, ADD_APPOINTMENT, ADD_NAME,
  FETCH_LANGUAGES,
  ADD_LANGUAGES,
  FETCH_OWNTASKS
} from "./api";

const ROOT_URL = 'http://dev.werapun.com:5011';

export function addplace(id, callback) {
  return dispatch => {
    dispatch({
      payload: id,
      type: FILTER_PLACE
    }, callback)
  }
}

export function AddLanguages(data) {
  return {
    type: ADD_LANGUAGES,
    payload: data
    
  }
}

export function fetchLanguages() {
  return async dispatch => {
    const response = await axios.get(`${ROOT_URL}/api/browser/languages`)
    dispatch({
      type: FETCH_LANGUAGES,
      payload: response.data
    })
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
    type: ADD_NAME,
    payload: value
  }
}

export function AddAppointment(data) {
  return {
    type: ADD_APPOINTMENT,
    payload: data
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

export function CreatTask(payload, callback) {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${ROOT_URL}/createtask`, payload, {
      headers: {
        authorization: token
      }
    }, () => {
      return callback();
    })
    console.log(response);
  }
}

export function GetTask() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await  axios.post(`${ROOT_URL}/getowntask`,null,{
      headers:{
        authorization: token
      }
    });
    dispatch({
      type: FETCH_OWNTASKS,
      payload: response.data
    })
  }
}