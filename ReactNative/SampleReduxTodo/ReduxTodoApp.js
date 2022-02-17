import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store'
import AddTodo  from './components/addTodo'
import  TodoList  from './components/todoList'

const store = configureStore()

export default function ReduxTodoApp(){
    return(
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar barStyle='dark-content'/>
                <AddTodo/>
                <TodoList/>
            </View>
        </Provider>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 32,
    },
  });