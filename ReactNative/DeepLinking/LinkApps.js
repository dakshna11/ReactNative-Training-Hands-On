import React from "react";
import { Button, Linking, View } from "react-native";



function LinkApp(){
    const number = '+91 99988 00000'
    const contact = '+91 94449 21120'
    const message = 'Hello there'
    return(
        <View>
            <Button title= 'Dialer' color='steelblue' onPress={()=> { Linking.openURL(`tel:${number}`)}}/>
            <Button title='Google Maps' color='yellow' onPress={()=>{Linking.openURL(`https://www.google.com/maps/search/?api=1&query=india`)}}/>
            <Button title='WhatsApp' color='orange' onPress={()=>{Linking.openURL(`whatsLinkApp://send?phone=${contact}&text=${message}`)}}/>
            <Button title='Instagram' color='red' onPress={()=>{Linking.openURL(`https://www.instagram.com`)}}/>
            <Button title='Facebook' color='green' onPress={()=>{Linking.openURL(`https://www.facebook.com`)}}/>
            <Button title='YouTube' color='brown' onPress={()=>{Linking.openURL(`https://www.youtube.com`)}}/>
        </View>
    )
}

export default LinkApp 

