import { types } from "../actions/actionTypes";

const initialState = {
    loading: false,
    user: [],
}

export default contactReducers = (state= initialState, {type, payload}) => {
    switch(type){
        case types.SEND_REQUEST_GET_ALL_USER:
            return{
                ...state,
                loading: true
            }
        case types.SEND_REQUEST_GET_ALL_USER_SUCCESS:
            return {
              ...state,
              user: payload,
              loading: false,
            }
        default:
            return state
    }
}