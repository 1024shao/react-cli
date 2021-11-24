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
    const completeData = this.getCompleteData()
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <MyHeader add={this.add} />
          <List ArrList={this.state.ArrList} handleClick={this.switchTaskDone}
            deleteTodo={this.deleteTodo} />
          <MyFooter CompleteData={completeData} cleanDone={this.cleanDone} handelAllCheck={this.handelAllCheck} />
        </div>
      </div>
    )
  }
  getCompleteData = () => {
    let total = this.state.ArrList.length
    let doneNum = 0
    if (total != 0) {
      this.state.ArrList.forEach(item => { if (item.isDone === true) doneNum++ })
    }
    // console.log(this.state)
    // console.log({ total, doneNum })
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
  // 切换任务是否完成
  switchTaskDone = id => {
    let ArrList = this.state.ArrList
    ArrList.forEach(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({ ArrList: ArrList })
  }
  // 清除完成
  cleanDone = () => {
    let ArrList = this.state.ArrList
    ArrList = ArrList.filter(item => !item.isDone)
    this.setState({ ArrList: ArrList })
  }
  // 删除一个任务
  deleteTodo = (id) => {
    const { ArrList } = this.state
    let newList = ArrList.filter(item => item.id != id)

    this.setState({ ArrList: newList })
  }
  // 控制任务全选/全不选
  handelAllCheck = (done) => {
    const { ArrList } = this.state
    const newList = ArrList.map(item => { return { ...item, isDone: done } })
    this.setState({ ArrList: newList })
  }
}


export default App