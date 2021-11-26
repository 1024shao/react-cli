import React, { Component } from 'react'

export default class News extends Component {
  componentDidMount() {
    console.log('didmound');
    setTimeout(() => {
      this.props.history.push('/home/message')
    }, 2500);
  }
  render() {
    console.log(this.props)
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
