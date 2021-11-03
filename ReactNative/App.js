/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, 
  ScrollView, SafeAreaView, StatusBar, Button, 
  Alert, Switch, BackHandler, TouchableHighlight} from 'react-native';
import img from './img/sunrise.jpg'

const styles = StyleSheet.create({
  baseText:{
    fontFamily:'Cochin',
    color:'red'
  },
  titleText:{
    fontSize:20,
    fontWeight:'bold'
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10
  },
  container:{
    flex:1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollview:{
    backgroundColor:'pink',
    marginHorizontal:20
  },
  text:{
    fontSize:42
  }
})

const App=()=>{
  const [titleText, setTitleText] = useState("Bird's Nest")
  const bodyText = "Hello"

  const onPressTitle=()=>{
    setTitleText("Bird's Nest PRESSED")
  }
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch =()=> setIsEnabled(previousState => !previousState)

  useEffect(()=>{
    const backAction =()=>{
    Alert.alert("Warning!!","Are you sure want to go close the app?",[
      {
        text:"Cancel",
        onPress:()=> null,
      },
      {text:"Yes", onPress:()=> BackHandler.exitApp()}
    ])
    return true
  }
    const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction)
    return()=> BackHandler.removeEventListener("hardwareBackPress",backAction)
  },[])
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor:'blue',flex:0.3}}></View>
        <View style={{backgroundColor:'red',flex:0.5}}></View>
        <Text>Hello World!</Text>

        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          <Text>{bodyText}</Text> 
        </Text>
        
        <Image style={{width:150,height:150}} source={img}></Image>
        <TextInput 
        style={styles.input} ></TextInput>

        <TextInput 
        style={styles.input} 
        placeholder='placeholder' keyboardType='numeric'></TextInput>

          <ScrollView style={styles.scrollview}>
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
          <Button title='Click Me' onPress={()=> Alert.alert('Simple click')}></Button>
          <Button title='Disabled button' disabled></Button>
          <Switch trackColor={{false:'#767577', true:'#81b0ff'}}
            thumbColor={isEnabled ? "f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}></Switch>

          <TouchableHighlight onPress={()=>alert("Clicked!!")} underlayColor= "red"><Text>Click Here</Text></TouchableHighlight>

        </ScrollView>
    </SafeAreaView>   
  )
}

export default App;
