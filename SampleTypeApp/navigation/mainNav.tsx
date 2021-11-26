import React,{FC, useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from 'firebase/compat'
import AppStack from "./appstack";
import AuthStack from "./authstack";


const MainNav:FC = ()=>{
    const [user, setUser] = useState<any>(null)
    const bootstrap = ()=>{
        firebase.auth().onAuthStateChanged(user1=>{
            if(user1){
                setUser(user1)
            }
        })
    }

    useEffect(()=>{
        bootstrap()
    },[])
    return(
        <NavigationContainer>
            {user !== null? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}


export default MainNav