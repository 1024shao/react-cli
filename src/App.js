import React, { Component } from 'react'
import Demo from './components/05_errorBoundary/Parent'
export default class App extends Component {
  render() {
    return (
      <div>
        <Demo></Demo>
      </div>
    )
  }
}
/*
  错误边界
    利用getDerivedStateFromError这个钩子捕获子组件的错误信息,防止错误蔓延,只在组件内部进行处理,动态决定展示内容
    统计错误 componentDidCatch()
*/