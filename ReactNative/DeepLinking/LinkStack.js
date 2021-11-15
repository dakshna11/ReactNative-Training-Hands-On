import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, Button } from 'react-native'

const LinkStack = createNativeStackNavigator()


function Home({navigation}){
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button onPress= {()=>{navigation.navigate('Details', {itemID: 86})}} title='Go to Details'>
      </Button>
    </View>
  )
}

function Details({route, navigation}){
  const {itemID} = route.params
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Text>itemID: {itemID}</Text>
      <Button onPress={()=>{navigation.goBack()}} title='Go back'>
      </Button>
    </View>
  )
}

function DeepLinkApp(){
  const linking = {
    prefixes:['https://demoapp.com','demo://'],
    config:{
      screens:{
      Home: 'Home',
      Details:'Details/:itemID'
    
    }
  }
}
  return(
    <NavigationContainer linking={linking}>
      <LinkStack.Navigator>
        <LinkStack.Screen name='Home' component={Home}/>
        <LinkStack.Screen name='Details' component={Details}/>
      </LinkStack.Navigator>
    </NavigationContainer>
  )
}

export default DeepLinkApp