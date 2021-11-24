import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <button onClick={this.getMessage}>汽车数据</button>
        <button onClick={this.getMessage2}>学生数据</button>
      </div>
    )
  }
  getMessage = () => {
    axios.get('http://localhost:3000/api1/cars').then(res => {
      console.log(res.data)
    }, err => {
      console.log(err)
    })
  }
  getMessage2 = () => {
    axios.get('http://localhost:3000/api2/students').then(res => {
      console.log(res.data)
    }, err => {
      console.log(err)
    })
  }
}
