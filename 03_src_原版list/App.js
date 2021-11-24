import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import List from './components/List'
import './App.css'
class App extends Component {
  state = {
    ArrList: [
      {
        id: '001',
        title: '吃饭',
        isDone: true,
      },
    ],
  }
  render() {

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <MyHeader add={this.add} />
          <List ArrList={this.state.ArrList} />
          <MyFooter CompleteData={this.getCompleteData()} />
        </div>
      </div>
    )
  }
  getCompleteData = () => {
    let total = this.state.ArrList.length
    let doneNum = 0
    this.state.ArrList.forEach(item => { if (item.isDone === true) doneNum++ })
    return { total, doneNum }
  }
  //添加一个任务
  add = (value) => {
    const obj = {
      title: value,
      isDone: false,
      id: uuidv4()
    }
    const { ArrList } = this.state
    this.setState({ ArrList: [obj, ...ArrList] })
  }
}


export default App