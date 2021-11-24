import React, { Component } from 'react'
import './index.css'
export default class ListItem extends Component {
  render() {
    const { item } = this.props
    return (
      <li>
        <label >
          <input type="checkbox" checked={item.isDone} onChange={this.handleClick} />
          <span>{item.title}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteTodo}>
          删除
        </button>
      </li >
    )
  }
  handleClick = (e) => {
    this.props.handleClick(this.props.item.id)
  }
  deleteTodo = (e) => {
    // 这里存在this指向问题,不使用window找不到confirm
    if (window.confirm('确定删除')) this.props.deleteTodo(this.props.item.id)
  }
}