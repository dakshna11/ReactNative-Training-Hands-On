import React from "react";
import { Component } from "react";

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:'enter name...'
        }
        this.updateState = this.updateState.bind(this)
    }
    updateState(e){
        this.setState({data:e.target.value})
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.data} onChange={this.updateState}/>
                <h2>{this.state.data}</h2>
                <input type='password' value='test'/>
            </div>
        )
    }
}

export default Forms