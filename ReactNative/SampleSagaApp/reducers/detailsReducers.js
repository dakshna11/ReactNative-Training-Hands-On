import { types } from "../actions/actionTypes";

const initialState = {
    loading: false,
    user :{}
}

export default detailsReducers = (state= initialState, {type, payload})=>{
    switch(type){
        case types.SEND_REQUEST_GET_DETAILS_USER:
            return {
                ...state,
                loading: true,
            }
        case types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
            }
        default:
            return state
    }
}