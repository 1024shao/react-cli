import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Test extends Component {
  state = {
    message: '',
    userList: []
  }

  componentDidMount() {
    PubSub.subscribe('getMessage', (name, obj) => {
      console.log(name)
      this.setState({ ...obj })
    })
  }

  render() {
    return (
      <div>
        <h2>Test</h2>
        <h2>{this.state.message}</h2>
        {
          this.state.userList.map((item, index) => {
            return <h2 key={index}>{item.title}</h2>
          })
        }
      </div>
    )
  }
}
