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
                <Link to={{
                  pathname: '/home/message/detail/',
                  state: { title: item.title, id: item.id }
                }}>{item.title}</Link>
                &nbsp;<button
                  onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                &nbsp;<button
                  onClick={() => this.replaceShow(item.id, item.title)}>replace查看</button>
              </li>
            })
          }
        </ul>
        <hr />
        <Route path='/home/message/detail/:id/:title' component={Detail} />
      </div >
    )
  }
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
}
