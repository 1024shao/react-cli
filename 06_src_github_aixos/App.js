import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  render() {
    const { isFirst, isLoading, err } = this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List userList={this.state.userList} />

        <h2 style={{ display: isFirst == true ? 'block' : 'none' }}>welcome</h2>
        <h2 style={{ display: isLoading == true ? 'block' : 'none' }}>is loading</h2>
        <h2>{err}</h2>
      </div>
    )
  }
  getUserList = (list) => {
    this.setState({ userList: list })
  }
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
}
