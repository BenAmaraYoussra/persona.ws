import React, { Component } from 'react'
import Person from './Component/persona';


// Transforming the "App.js" into a class-based component

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      shows:false,
      
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.setState({shows:!this.state.shows})}>Toggle</button>
        {this.state.shows && <Person/>}
        
        </div>
    )
  }
}
