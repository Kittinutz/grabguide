import axios from 'axios';
import {API_TRIP,API_GUIDE} from './api';
const ROOT_URL = 'http://dev.werapun.com:5011';


export function Gettripapi() {
    return (dispatch)=> {

        axios.get(`${ROOT_URL}/api/trip`).then(response => {
            dispatch({
                type:API_TRIP,
                payload:response.data
            })
        })
    }

}

export function Getguideapi() {
    return dispatch =>{
        axios.get(`${ROOT_URL}/api/guide`).then(response =>{
            dispatch({
                type:API_GUIDE,
                payload:response.data
            })
        })
    }

}