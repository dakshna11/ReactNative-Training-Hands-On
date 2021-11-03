import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Styles = () => {
  return (
    <View style={{flex:1}}>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> 


        <View style={{ flex: 1, backgroundColor: "darkorange" }} />

        <View style={{ height: '10%', backgroundColor: 'yellow'}} />

        {/* <View style={{flexDirection:'column-reverse'}}>
          <View style={{width: 50 ,height:50, backgroundColor:'powderblue'}}/>
          <View style={{width: 50 ,height:50, backgroundColor:'skyblue'}}/>
          <View style={{width: 50 ,height:50, backgroundColor:'steelblue'}}/>
        </View> */}

        <View style={{direction:'rtl'}}>
          <View style={{width: 50 ,height:50, backgroundColor:'powderblue'}}/>
          <View style={{width: 50 ,height:50, backgroundColor:'skyblue'}}/>
          <View style={{width: 50 ,height:50, backgroundColor:'steelblue'}}/>
        </View>
    </View>
  );
};

export default Styles;