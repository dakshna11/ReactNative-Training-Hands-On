import  React, {FC, useState }  from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import {Input,Button} from '../components'

const App:FC = (props)=>{
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

   

    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeHolder='Email' onChangeText={(text)=>setEmail(text)}/>
            <Input placeHolder='Password'  secureTextEntry onChangeText={(text)=>setPassword(text)}/>
            <Button title='Login' onPress={()=>Alert.alert('Pressed')}/>
            <View style={styles.loginText}>
                <Text style={{marginHorizontal:5}}>Don't Have An Account?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('signup')}>
                    <Text style={{color:'rgba(81,135,200,1)'}}>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'

    },
    loginText:{
        flexDirection:'row',
        marginVertical: 20
    }
})