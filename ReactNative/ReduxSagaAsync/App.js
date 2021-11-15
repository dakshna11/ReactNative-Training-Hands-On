import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Reducer.js";



export default function App(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUser())

},[dispatch])

const user = useSelector((state)=> state.user.user)
console.log(user)

return(
    <div>
        {user && <h1>Hello, {user.name}</h1>}
    </div>
)
}
