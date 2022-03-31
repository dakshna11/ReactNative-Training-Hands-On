import { useState, useEffect } from "react"
import {getSession, signIn} from 'next-auth/react'




function DashBoard(){
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const page = async ()=>{
            const session = await getSession()
            if(!session) {signIn()}
            else { setLoading(false)}
        }
        page()
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
        return <h1>DashBoard Page</h1>
}

export default DashBoard