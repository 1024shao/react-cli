import React, { Component } from 'react'
import Count from './container/Count'
import Person from './container/person'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
// 结束