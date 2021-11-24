import React, { Component } from 'react'
import './index.css'
export default class MyFooter extends Component {
  render() {
    const { doneNum, total } = this.props.CompleteData
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={(doneNum === total) && total != 0} onChange={this.handelAllCheck} />
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.btnClick}>清除已完成任务</button>
      </div>
    )
  }
  btnClick = () => {
    this.props.cleanDone()
  }
  handleChange = (e) => {
    console.log(e.target.checked)
    return false
  }
  handelAllCheck = (e) => {
    this.props.handelAllCheck(e.target.checked)
  }
}
