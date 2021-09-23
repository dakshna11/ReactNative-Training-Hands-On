import React from "react";
import { ReactDOM } from "react";

function Hello(props){
    return <h1>Hello world!!</h1>
}

function HelloFalse(props){
    return <h1>Please sign in!</h1>
}


function Conditional(props){
    const sample = props.sample
    if(sample){
        return <Hello/>
    }
    return <HelloFalse/>

}

export default Conditional