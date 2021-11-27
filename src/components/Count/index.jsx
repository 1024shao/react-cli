import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
  render() {
    return (
      <div>
        <h2>当前求和为:{store.getState()}</h2>
        <select ref={c => this.selectRef = c} onChange={this.getData}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}> + </button>&nbsp;
        <button> - </button>&nbsp;
        <button>等一等加</button>&nbsp;
      </div >
    )
  }
  increment = () => {
    const { value } = this.selectRef
    console.log(value)
  }
  getData = (e) => {
    console.log(e.target)
  }
}
