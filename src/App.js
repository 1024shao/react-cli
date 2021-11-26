import React, { Component } from 'react'
import { Button } from 'antd'
import { StepForwardOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>hello world</h2>
        <button>嘻嘻嘻</button>
        <Button type='ghost'>哈哈哈</Button>
        <Button type='primary'>哈哈哈</Button>
        <StepForwardOutlined />
      </div>
    )
  }
}
