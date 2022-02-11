import React from 'react'
import Counter from './Counter'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

describe('Counter Component',()=>{
    it('renders the count',()=>{
        const props = {
            dispatch:jest.fn(),
            count: 3,
            id: 'randomid'
        }
        const wrapper = shallow(<Provider><Counter {...props}/></Provider>)
        expect(wrapper.find('p').text()).toEqual('Current Count: 3')
    })

    it('dispatches the right action for incrementing',()=>{
        const props ={
            dispatch: jest.fn(),
            count: 3,
            id: 'randomid'
        }
        const wrapper = shallow(<Counter {...props}/>)
        wrapper.find('button.increment').simulate('click')
        expect(props.dispatch).toHaveBeenCalled()
    })
})