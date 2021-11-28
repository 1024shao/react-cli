import React, { Component } from 'react'
import store from '../../redux/store'
import { INCREMENT, DECREMENT } from '../../redux/constant'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction }
  from '../../redux/count_action'
export default class Count extends Component {

  render() {
    return (
      <div>
        <h2>当前求和为:{store.getState()}</h2>
        <select ref={c => this.selectRef = c} >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.increment}> + </button>&nbsp;
        <button> - </button>&nbsp;
        <button onClick={this.waitIncrement}>等一等加</button>&nbsp;
      </div >
    )
  }
  increment = () => {
    const { value } = this.selectRef
    store.dispatch(createIncrementAction(value * 1))
  }
  waitIncrement = () => {
    const { value } = this.selectRef
    store.dispatch(createIncrementAsyncAction(value * 1, 500))
  }
}
