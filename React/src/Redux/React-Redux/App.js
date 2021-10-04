import React from "react";  
import { Provider } from "react-redux";
import store from "./store";
// import CakeContainer from './CakeContainer'
// import HookCakeContainer from "./HookCakeContainer";
import UserContainer from "./Async/UserContainer";

function App(){
    return(
        <Provider store={store}>
            <UserContainer/>
        </Provider>
    )
}
export default App