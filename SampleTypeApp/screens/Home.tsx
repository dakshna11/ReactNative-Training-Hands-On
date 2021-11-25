import React,{FC }  from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App:FC = ()=>{
    return(
        <View>
        <View style={styles.container}>
            <Text>App Screen</Text>
        </View>
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