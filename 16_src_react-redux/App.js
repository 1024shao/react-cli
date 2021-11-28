import React, { Component } from 'react'
import Count from './container/Count'
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    )
  }
}
