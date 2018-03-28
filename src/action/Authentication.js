import axios from 'axios';
import {AUTH_USER, FETCH_USER} from './type';

const ROOT_URL = 'http://dev.werapun.com:5011';


export function signup(value, callback) {
    return async dispatch => {
        const response = await axios.post(`${ROOT_URL}/signup`, value);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: AUTH_USER,
        }, () => {
            callback();
        })
    }
}

export  function fetchmessage() {
    return async dispatch =>{
        const token = localStorage.getItem('token');
        const response = await
            axios.get(`${ROOT_URL}/`, {
                headers: {
                    authorization: token,
                }
            });
        dispatch({
            type:FETCH_USER,
            payload:response.data
        })
    }



}