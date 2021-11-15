import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from './Reducer'
import { watcherSaga } from "./Rootsaga";


const reducer = combineReducers({
    user: userReducer
})

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(watcherSaga)

export default store