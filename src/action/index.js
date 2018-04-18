import axios from 'axios';
import {
  API_TRIP,
  API_GUIDE,
  API_PLACE,
  API_ACTIVITIES,
  TRIP_SELECTED,
  STEP1_SUBMIT,
  BOOKING_NEWS,
  BOOKING_QUERY,
  BOOKING_QUERYBYID,
  API_PLACEBYACTIVITIES
} from './api';

const ROOT_URL = 'http://dev.werapun.com:5011';
const TEST_URL = 'htpp://localhost:5011'


export function Gettripapi() {
  return (dispatch) => {
    
    axios.get(`${ROOT_URL}/api/trip`).then(response => {
      dispatch({
        type: API_TRIP,
        payload: response.data
      })
    })
  }
  
}

export function Getguideapi() {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/guide`).then(response => {
      dispatch({
        type: API_GUIDE,
        payload: response.data
      })
    })
  }
  
}

export function GetPlaceApi() {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/places`).then(response => {
      dispatch({
        type: API_PLACE,
        payload: response.data
      })
    })
  }
  
}

export function GetActivitiesAPi() {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/getactivities`).then(response => {
      dispatch({
        type: API_ACTIVITIES,
        payload: response.data
      })
    })
  }
}

export function GetPlacebyActivities(name,onselect) {
  const data = {
    name: name
  }
  return async dispatch => {
    const response = await axios.post(`${ROOT_URL}/api/getplacebyactivities`, data)
    dispatch({
      type: API_PLACEBYACTIVITIES,
      payload: response.data,
      onselect:onselect
    })
  }
}

export function SelectedTrip(id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/trip/${id}`).then(response => {
      dispatch({
        type: TRIP_SELECTED,
        payload: response.data
      })
    })
  }
  
}

/*booking api */
export function Step1(value) {
  return dispatch => {
    dispatch(
      {
        type: STEP1_SUBMIT,
        payload: value,
      }
    )
  }
}


export function booking(value, cb) {
  return dispatch => {
    const token = localStorage.getItem('token');
    axios.post(`${ROOT_URL}/bookingtrip`,{
      headers:{
        authorization: token,
      }, body:value
    }).then(response => {
      dispatch(
        {
          type: BOOKING_NEWS,
          payload: response.data,
        }
      )
    }).then(() => {
      return cb();
    })
  }
}

export function querybooking() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${ROOT_URL}/api/mybooking`, {
      headers: {
        authorization: token
      }
    });
    dispatch({
      type: BOOKING_QUERY,
      payload: response.data
    })
    
  }
  
}

export function querybookingById(id) {
  return async dispatch => {
    const response = await  axios.post(`${ROOT_URL}/api/mybooking`, {id: id})
    dispatch({
      type: BOOKING_QUERYBYID,
      payload: response.data
    })
    
  }
  
}