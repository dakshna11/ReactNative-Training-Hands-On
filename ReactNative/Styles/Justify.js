import React from "react"
import { Image, View } from "react-native"


const Justify =()=>{
    return(
        // <View style={{flex:1, justifyContent:'center'}}>
        //   <View style={{width: 50 ,height:50, backgroundColor:'powderblue'}}/>
        //   <View style={{width: 50 ,height:50, backgroundColor:'skyblue'}}/>
        //   <View style={{width: 50 ,height:50, backgroundColor:'steelblue'}}/>
        // </View>
        <View style={{ alignItems:'flex-end'}}>
        <View style={{alignSelf:'center', minWidth: 50 ,height:50, backgroundColor:'powderblue'}}/>
        <View style={{minWidth: 50 ,height:50, backgroundColor:'skyblue'}}/>
        <View style={{minWidth: 50 ,height:50, backgroundColor:'steelblue'}}/>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
        </View>
        //  <View style={{ flex:1, flexWrap:'wrap', alignContent:'center'}}>
        //     <View style={{width: 90 ,height:150, backgroundColor:'green'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'red'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'steelblue'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'yellow'}}/>  
        //     <View style={{width: 90 ,height:150, backgroundColor:'brown'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'black'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'pink'}}/>
        //     <View style={{width: 90 ,height:150, backgroundColor:'grey'}}/>
        //  </View>
        // <View style={{}}>
        // <View style={{position:'absolute',top:25,left:25, minWidth: 50 ,height:50, backgroundColor:'powderblue'}}/>
        // <View style={{position:'absolute',top:50,left:50,minWidth: 50 ,height:50, backgroundColor:'skyblue'}}/>
        // <View style={{position:'absolute',top:75,left:75,minWidth: 50 ,height:50, backgroundColor:'steelblue'}}/>
        // </View>
        
    )
}

export default Justify