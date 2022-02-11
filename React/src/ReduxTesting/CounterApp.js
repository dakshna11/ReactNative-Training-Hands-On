import Counter from './Counter'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createCounter } from './store'
import { Provider } from 'react-redux'
import store from './store'

const randomString =()=> Math.random().toString(36)


export class CounterApp extends Component{
    addCounter = ()=> this.props.dispatch(createCounter(randomString()))

    renderCounter(id){
        return(
            <li key={id}>
            <Provider store={store}><Counter id={id}/></Provider>
            </li>
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.addCounter}>AddCounter</button>
                <ul>{this.props.counterIds.map(id => this.renderCounter(id))}</ul>         
            </div>
        )
    }
}

const mapStateToProps = state=>({
    counterIds: Object.keys(state)
})

export default connect(mapStateToProps)(CounterApp)