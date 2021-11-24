import React, { Component } from 'react'
import './index.css'
export default class ListItem extends Component {
  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={item.isDone} />
          <span>{item.title}</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
