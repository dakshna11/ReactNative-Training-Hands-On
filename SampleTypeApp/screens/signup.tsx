import  React, {FC, useState }  from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import {Input,Button} from '../components'
import firebase from 'firebase/compat'


const SignUp:FC = (props)=>{
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)


    const signup = async ()=>{
        if(name && email && password){
            try{
                const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)
                if(user){
                    Alert.alert(JSON.stringify(user))
                }

            }catch(error){
                console.log(error)
            }
        }
        else{
            Alert.alert('Error', 'Missing Fields')
        }
    }

    return(
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Input placeHolder='Name' onChangeText={(text)=>setName(text)}/>
            <Input placeHolder='Email' onChangeText={(text)=>setEmail(text)}/>
            <Input placeHolder='Password' secureTextEntry onChangeText={(text)=>setPassword(text)}/>
            <Button title='Sign Up' onPress={signup}/>
            <View style={styles.loginText}>
                <Text style={{marginHorizontal:5}}>Already Have An Account?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('login')}>
                    <Text style={{color:'rgba(81,135,200,1)'}}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

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