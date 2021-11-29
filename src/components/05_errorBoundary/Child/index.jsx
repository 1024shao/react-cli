import React, { Component } from 'react'

export default class extends Component {
  state = {
    userList: {}
  }
  render() {
    return (
      <div>
        {
          this.state.userList.map(item => {
            return <h2 key={item.id}>item.name</h2>
          })
        }
      </div>
    )
  }
}
