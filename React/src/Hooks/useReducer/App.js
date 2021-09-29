import React,{useReducer} from 'react';
//import CounterOne from './CounterOne';
import Component1 from './Component1'

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState;
        default:
            return state
    }
}
function App(props) {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
            <div>
                Count = {count}
                <Component1/>
            </div>
        </CountContext.Provider>
    );
}

export default App;