import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'shouldComponentUpdate Method'
    }
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "componentDidMount Method"})
    }, 5000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
  }
  shouldComponentUpdate() {
    return true; 
  }

  componentDidUpdate() {
    document.getElementById('current-state').innerHTML = "The current state is " + this.state.name
  }
  render() {
    return (
      <div>
       <p>This is a {this.state.name}</p>
       <p id="current-state"></p>
        <p id="previous-state"></p>
      </div>
    )
  }
}
export default LifeCycle