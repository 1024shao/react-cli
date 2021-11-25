import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Demo extends Component {
  render() {
    return (
      <div>
        <h2>demo</h2>
        <button onClick={this.publishMessage}>点击发布消息</button>
      </div>
    )
  }
  publishMessage = () => {
    const obj = {
      message: '你好啊,我是兄弟组件发送的消息,你收到了嘛',
      userList: [
        { title: '111' },
        { title: '22' },
        { title: '131' },
      ]
    }
    PubSub.publish('getMessage', obj)
  }
}
