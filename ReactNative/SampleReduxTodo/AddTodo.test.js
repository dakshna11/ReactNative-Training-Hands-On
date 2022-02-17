import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import configureStore from '../SampleReduxTodo/store'
import AddTodo  from '../SampleReduxTodo/components/addTodo' 

describe('AddTodo component test', ()=>{
    test('adds a new TODO when button is clicked', ()=>{
        const store = configureStore()
        const component = (<Provider store={store}><AddTodo/></Provider>)
        const {getByPlaceholderText, getByText} = render(component)

        const input = getByPlaceholderText(/repository/i)
        expect(input).toBeTruthy()

        const textToEnter = 'random text'
        fireEvent.changeText(input, textToEnter)
        fireEvent.press(getByText('Submit form'))

        const todosState = store.getState().todos
        expect(todosState.length).toEqual(1)

        expect(todosState).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    // id:1,
                    text: textToEnter,
                    //date: expect.any(Date)
                })
            ])
        )
    })
})