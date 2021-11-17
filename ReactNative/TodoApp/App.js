import React, { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
//import AsyncStorage from '@react-native-async-storage/async-storage'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name: 'MainDB'
    }
)
const COLORS={primary: '#1f145c', white:'#fff'}

const App = ()=>{
    const [textInput, setTextInput] = useState('')
    const [todos, setTodos] = useState([])
    React.useEffect(() => {
        createTable()
        getTodosFromDevice()
    },[])

    const createTable = ()=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Todo VARCHAR(1000))",
                [],
                (tx,res)=>{
                    console.log("Table created successfully")
                },
                error =>{
                    console.log("Error occured")
                }
            )
        })
    }

    const ListItems = ({todo})=>{
        return(
            <View style={styles.listItems}>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight:'bold', 
                                fontSize:15, 
                                color: COLORS.primary,
                                textDecorationLine: todo?.completed ? 'line-through': 'none'}}>
                        {todo?.task}
                    </Text>
                </View>
                {
                    !todo?.completed &&(
                        <TouchableOpacity style={[styles.actionIcon]} onPress={()=>markTodo(todo?.id)}>
                    <Icon name='done' size={20} color={COLORS.white}/>
                </TouchableOpacity>
                    )
                }
                
                <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'red'}]} onPress={()=> deleteTodo(todo?.id)}>
                    <Icon name='delete' size={20} color={COLORS.white}/>
                </TouchableOpacity>
            </View>
        )

    }
    const saveTodoToDevice =  ()  =>{
        // try{
        //     const stringifyTodos = JSON.stringify(todos)
        //     await AsyncStorage.setItem('todos', stringifyTodos)
        // }catch(e){
        //     console.log(e)
        // }
        try{
           
             db.transaction( (tx)=>{
                 tx.executeSql(
                    "INSERT INTO Users (Todo) VALUES (?)",
                    [textInput]
                )
            })
        } catch(error){
            console.log(error)
        }
        Alert.alert('calling settodo')
    }
    const getTodosFromDevice = ()=>{
        // try{
        //     const todos = await AsyncStorage.getItem('todos')
        //     if(todos !=null){
        //         setTodos(JSON.parse(todos))
        //     }
        // } catch(error){
        //     console.log(error)
        // }
        try{
            Alert.alert('calling gettodo')
            db.transaction((tx)=>{
                tx.executeSql(
                    "SELECT * FROM Users",
                    [],
                    (tx, results) =>{
                        console.log("Retrieved successfully")
                        var len = results.rows.length

                        if(len>0){
                            var res = []
                            for(let i=0; i<len; i++){
                                let item = results.rows.item(i)
                                res.push({id: item.id, Todo: item.Todo})
                            }
                            setTodos(res)
                        }

                    }
                )
            })
        } catch(error){
            console.log(error)
        }
    }
    const addTodo =()=>{
        if(textInput ==''){
            Alert.alert("Error","Please type something")
        }
        else{
            saveTodoToDevice()
        //console.log(textInput)
        const newTodo ={
            id: Math.random(),
            task: textInput,
            completed: false
        }
        setTodos([...todos, newTodo])
        setTextInput('')
    }
    }
    const markTodo = todoId=>{
        const newTodos  = todos.map((item)=>{
            if(item.id == todoId){
                return{ ...item, completed:true}
            }
            return item
        })
        setTodos(newTodos)
    }
    const deleteTodo = (todoId)=>{
        const newTodos = todos.filter(item=> item.id != todoId )
        setTodos(newTodos)
    }
    const clearTodos =()=>{
        Alert.alert("Confirm", "Clear all Todos?",[
            {
                text: 'Yes',
                onPress: ()=> setTodos([])
            },
            {text: 'No'}
        ])
    }
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <Text style={{fontWeight: 'bold', fontSize:20, color: COLORS.primary}}>
                    TODO APP
                </Text>
                <Icon name='delete' size={25} color ='red' onPress={clearTodos}/>
            </View>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding: 20, paddingBottom: 100}}
            data={todos}
            renderItem={({item})=> <ListItems todo={item}/>}
            />
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Add Todo' value={textInput} onChangeText={(text)=> setTextInput(text)}/>
                </View>
                <TouchableOpacity onPress={addTodo}>
                    <View style={styles.iconContainer}>
                        <Icon name='add' color={COLORS.white} size={30}/>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        padding:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer:{
        position:'absolute',
        bottom:0,
        color:COLORS.white,
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputContainer:{
        backgroundColor: COLORS.white,
        elevation: 40,
        flex:1,
        height:50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20
    },
    iconContainer:{
        height: 50,
        width: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItems:{
        padding: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10
    },
    actionIcon:{
        height:25,
        width:25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 3
    }
})

export default App