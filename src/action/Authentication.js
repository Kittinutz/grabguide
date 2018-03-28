import axios from 'axios';
import {AUTH_USER} from './type';
const ROOT_URL = 'http://dev.werapun.com:5011';


export function signup (value){
    return async dispatch=>{
        const response =  await axios.post(`${ROOT_URL}/signup`,value);
        localStorage.setItem('token', response.data.token);
            dispatch({
                type:AUTH_USER,
            })
    }
}