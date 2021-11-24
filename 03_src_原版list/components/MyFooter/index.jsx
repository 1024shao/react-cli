import React, { Component } from 'react'
import './index.css'
export default class MyFooter extends Component {
  render() {
    const { CompleteData } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{CompleteData.doneNum}</span> / 全部{CompleteData.total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
