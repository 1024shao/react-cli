import React, { Component } from 'react'
import store from './redux/store'
import Count from './container/Count'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
