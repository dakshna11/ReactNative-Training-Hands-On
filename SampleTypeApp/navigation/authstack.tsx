import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, SignUp } from '../screens'

const Stack = createNativeStackNavigator()

const AuthStack: React.FC = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='signup' component={SignUp}/>
            <Stack.Screen name='login' component={Login}/>  
        </Stack.Navigator>
    )
}

export default AuthStack

