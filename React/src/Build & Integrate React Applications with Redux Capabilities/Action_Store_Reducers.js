const redux  = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake(){
    return {
        type: BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialCakeState = {
    numOfCake: 20
}
const initialIceCreamState = {
    numOfIceCream : 10
}
// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM : return {
//             ...state,
//             numOfIceCream : state.numOfIceCream - 1
//         }
//         default: return state
//     }
// }
const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const RootReducer = combineReducers({
    Cake: cakeReducer,
    IceCream : iceCreamReducer
})
const store = createStore(RootReducer,applyMiddleware(logger))
console.log('Intial state',store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
