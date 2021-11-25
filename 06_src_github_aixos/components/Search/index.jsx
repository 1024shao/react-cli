import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search"
            ref={c => this.inputRef = c} />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
  search = () => {
    const { updateAppState } = this.props
    updateAppState({ userList: [], isFirst: false, isLoading: true, err: '' })
    const keyWorld = this.inputRef.value
    axios.get('https://api.github.com/search/users?q=' + keyWorld)
      .then(res => {
        console.log(res)
        updateAppState({ userList: res.data.items, isFirst: false, isLoading: true, err: '' })
      }, err => {
        console.log(err);
        updateAppState({ userList: [], isFirst: false, isLoading: false, err: err })
      })
  }
}
