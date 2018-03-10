import axios from 'axios';
import {API_TRIP,API_GUIDE,API_PLACE,API_ACTIVITIES,TRIP_SELECTED} from './api';
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
export function GetPlaceApi() {
    return dispatch =>{
        axios.get(`${ROOT_URL}/api/places`).then(response=>{
            dispatch({
                type:API_PLACE,
                payload:response.data
            })
        })
    }

}
export function GetActivitiesAPi(){
    return dispatch=>{
        axios.get(`${ROOT_URL}/api/getactivities`).then(response=>{
            dispatch({
                type:API_ACTIVITIES,
                payload:response.data
            })
        })
    }
}
export function SelectedTrip(id) {
    return dispatch=>{
        axios.get(`${ROOT_URL}/api/trip/${id}`).then(response=>{
            dispatch({
                type:TRIP_SELECTED,
                payload:response.data
            })
        })
    }

}