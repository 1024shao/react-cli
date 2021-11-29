import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <h2>Demo....</h2>
        <h2>当前求和为:{this.state.count}</h2>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
  increment = () => {
    const { count } = this.state
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count)
    })
  }
}
