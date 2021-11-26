import React, { Component } from 'react'
import Detail from './Detail'
import { Route, Link } from 'react-router-dom'
export default class Message extends Component {
  state = {
    messageList: [
      { id: '001', title: 'message1' },
      { id: '002', title: 'message2' },
      { id: '003', title: 'message3' },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageList.map(item => {
              return <li key={item.id}>
                <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
                >{item.title}</Link>
              </li>
            })
          }
        </ul>
        <hr />
        <Route path='/home/message/detail/' component={Detail} />
      </div>

    )
  }
}
