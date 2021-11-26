import React,{FC }  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { Button } from '../components'

const App:FC = ()=>{
    const signOut = ()=>{
        firebase.auth().signOut()
    }
    return(
       
        <View style={styles.container}>
            <Text>App Screen</Text>
            <Button title='Sign Out' onPress={signOut}/>
        </View>
    
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        color:'red',
        backgroundColor:'yellow'

    }
})