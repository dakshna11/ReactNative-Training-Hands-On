import React from "react";
import { ScrollView, Text, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
 container:{
    flex:1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollview:{
    backgroundColor:'pink',
    marginHorizontal:20
  },
  text:{
    fontSize:50
  }
})

const Sample=()=>{
  return(
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
  )
}
export default Sample