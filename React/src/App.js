
import './App.css';
import React, { Component } from 'react';

function Welcome (props) {
  return <h1>Hello, {props.name}</h1>;

} 
function button(){
    alert('hello')
}
function App() { 
  return (
    <div className="App">
      <Welcome name="John"/>
      <Welcome name="Mary"/>
      <Welcome name="Alex"/>
    
      <button onClick={button}>Click here!!</button>
    
    </div>
  );
}

/*lass Clock extends Component{
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  button(){
    alert('Hello')
  }
  render(){
    return(
      <div>
        <h1>Welcome</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.button}>Click me!</button>
      </div>
    );
  }
}*/

export default App;