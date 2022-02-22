import { types } from "./actionTypes";

export function fetchDetailsData(data){
    return{
        type: types.SEND_REQUEST_GET_DETAILS_USER,
        payload: data
    }
}

export function fetchDetailsDataSuccess(user){
    return{
        type: types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS,
        payload: user
    }
}