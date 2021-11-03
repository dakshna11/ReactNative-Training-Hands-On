import React, {useRef, useState} from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const Drawerlayout=()=>{
    const drawer = useRef(null)
    const [drawerPosition, setDrawerPosition]  = useState("left")
    const changeDrawerPosition = ()=>{
        if(drawerPosition === 'left'){
            setDrawerPosition('right')
        }
        else{
            setDrawerPosition('left')
        }
    }
    const navigationView = ()=>{
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>Drawer Layout</Text>
            <Button title="Close drawer" onPress={()=>drawer.current.closeDrawer()}/>
        </View>
    }

    return(
        <DrawerLayoutAndroid ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Drawer on the {drawerPosition} !
                </Text>
                <Button title="Change Drawer position" onPress={()=> changeDrawerPosition()}/>
                <Text style={styles.paragraph}>
                    Swipe from side or press button to see !
                </Text>
                <Button title="Open drawer" onPress={()=> drawer.current.openDrawer()}/>
 
            </View>
        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:16
    },
    navigationContainer:{
        backgroundColor:"#ecf0f1"
    },
    paragraph:{
        padding:16,
        fontSize:15,
        textAlign:"center"
    }
})

export default Drawerlayout