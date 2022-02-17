import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'


import DrawerNavigator from '../NavigationTesting/DrawerNavigator'

describe('Testing Drawer Navigation', ()=>{
    test('screen contains a button linking to notifications page', async ()=>{
        const {findByText, findAllByText} = render(<NavigationContainer><DrawerNavigator/></NavigationContainer>)
        const button =  await findByText('Go to notifications')

        expect(button).toBeTruthy()
    })

    test('clicking on the button moves to notification screen', async ()=>{
        const {queryByText, findByText} = render(<NavigationContainer><DrawerNavigator/></NavigationContainer>)
        const oldScreen = queryByText('Welcome!')
        const button = await findByText('Go to notifications')

        expect(oldScreen).toBeTruthy()
        fireEvent(button, 'press')
        const newScreen = await findByText('This is the notification screen')

        expect(newScreen).toBeTruthy()

    })
    
})