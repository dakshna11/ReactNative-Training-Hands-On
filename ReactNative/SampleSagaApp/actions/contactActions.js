import { types } from "./actionTypes";

export function fetchContactData(data){
    return{
        type: types.SEND_REQUEST_GET_ALL_USER,
        payload: data
    }
}

export function fetchContactDataSuccess(user){
    return{
        type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS,
        payload: user
    }
}