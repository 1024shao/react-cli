import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { userList } = this.props
    return (
      <div className="row">
        {
          userList.map(item => {
            return (
              <div className="card" key={item.id}>
                <a href="https://github.com/reactjs" target="_blank">
                  <img src={item.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
