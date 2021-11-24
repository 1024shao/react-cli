import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
class App extends Component {
  render() {
    return (
      <div>
        <Hello ></Hello>
        <h2 >APP</h2>
        <Welcome />
      </div >
    )
  }
}


export default App