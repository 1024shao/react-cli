import React, { Component } from 'react'

import Child from '../Child'
export default class Parent extends Component {
  state = {
    hasError: ''
  }
  static getDerivedStateFromError(err) {
    console.log('@@@@@@@', err)
    return { hasError: err }
  }
  render() {
    return (
      <div>
        <h2>我是parent组件</h2>
        {this.state.hasError === '' ? <Child /> : <h2>网络错误</h2>}
      </div>
    )
  }
}
