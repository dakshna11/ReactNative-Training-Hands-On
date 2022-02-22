import { spawn } from "redux-saga/effects";
import contactSaga from "./userSagas";

export default function* rootSaga(){
    yield spawn(contactSaga)
}