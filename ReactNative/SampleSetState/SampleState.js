import React, { Component } from "react";
import {TextInput, View, Text} from 'react-native'

class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  render() {
    return (
      <View>
        <TextInput className="text-TextInput title-TextInput" type="text" 
        value={this.state.title} onChange={event => {this.handleChange(event);}}/>
        <Text>{this.state.title}</Text>
      </View>
    );
  }
}
export default ControlledForm;