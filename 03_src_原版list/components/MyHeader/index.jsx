import React, { Component } from 'react'
import './index.css'
export default class MyHeader extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyPress={this.handleInput}
        />
      </div>
    )
  }
  handleInput = (e) => {
    if (e.charCode === 13) {
      let value = e.target.value
      if (value != '') {
        this.props.add(e.target.value)
      } else {
        alert('不能为空')
      }
      e.target.value = ''
    }
  }
}
