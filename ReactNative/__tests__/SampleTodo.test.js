import React from "react";
import App from "../SampleTodo/App";
import { render, fireEvent } from "@testing-library/react-native";


it('whether creating a todo', ()=>{
    const {getByText, getByPlaceholderText} = render(<App/>)
    const addButton = getByText("+")
    const textInput = getByPlaceholderText('Write something')
    const sampleText = 'sample text'

    fireEvent.changeText(textInput, sampleText)
    fireEvent.press(addButton)

    expect(getByText(sampleText)).not.toBeNull()
})
it('delete a todo', ()=>{
    const {getByText, getByPlaceholderText, queryByText} = render(<App/>)
    const addButton = getByText("+")
    const textInput = getByPlaceholderText('Write something')
    const sampleText = 'sample text'

    fireEvent.changeText(textInput, sampleText)
    fireEvent.press(addButton)

    const deleteItemButton = getByText('X')
    fireEvent.press(deleteItemButton)
    
    expect(queryByText(sampleText)).toBeNull()

})

it('display error message while creating todo with empty text', ()=>{
    const {getByText} = render(<App/>)
    const addItemButton = getByText('+')

    fireEvent.press(addItemButton)

    expect(getByText('Please insert a valid text')).not.toBeNull()
})

it('remove error message once todo created correctly', ()=>{
    const {getByText, getByPlaceholderText, queryByText} = render(<App/>)
    const addButton = getByText("+")
    const textInput = getByPlaceholderText('Write something')
    const sampleText = 'sample text'

    fireEvent.changeText(textInput, sampleText)
    fireEvent.press(addButton)

    expect(queryByText('Please insert a valid text')).toBeNull()
})