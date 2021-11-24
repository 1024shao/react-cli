import React, { Component } from 'react'
import ListItem from '../ListItem'
import './index.css'
export default class List extends Component {
  render() {
    const { ArrList } = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            ArrList.map(item => {
              return <ListItem item={item} key={item.id}
                handleClick={this.props.handleClick}
                deleteTodo={this.props.deleteTodo} />
            })
          }
        </ul>
      </div>
    )
  }
}
