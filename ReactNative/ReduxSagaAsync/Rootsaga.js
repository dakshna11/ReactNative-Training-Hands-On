import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "./Reducer";
import { handleGetUser } from "./userSaga";



export function* watcherSaga(){
    yield takeLatest(GET_USER, handleGetUser)
}