import axios from 'axios';
import {AUTH_USER, FETCH_USER,UNAUTH_USER} from './type';
import {BrowserRouter} from 'react-router-dom';

const ROOT_URL = 'http://dev.werapun.com:5011';


export function signup(value, callback) {
  return async dispatch => {
    const response = await axios.post(`${ROOT_URL}/signup`, value);
    localStorage.setItem('token', response.data.token);
    console.log(BrowserRouter)
    dispatch({
      type: AUTH_USER,
    }, () => {
      callback();
    })
  }
}

export function fetchmessage() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await
      axios.get(`${ROOT_URL}/`, {
        headers: {
          authorization: token,
        }
      });
    dispatch({
      type: FETCH_USER,
      payload: response.data
    })
  }
}

  export function Logout(callback) {
    localStorage.removeItem('token');
    
    return dispatch=> {
      dispatch({
        type:UNAUTH_USER
        
      },()=>{
        callback();
      })
    }
  
  }
  
