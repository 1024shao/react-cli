import React, { Component } from 'react'
import qs from 'querystring'
export default class Detail extends Component {
  state = {
    detailData: [
      { id: '001', title: '详情1' },
      { id: '002', title: '详情2' },
      { id: '003', title: '详情3' },
    ]
  }
  render() {
    console.log(this.props)
    // 声明接受search参数(queryString)
    // // const { match: { params } } = this.props
    // const { search } = this.props.location
    // const result = qs.parse(search.slice(1))

    // 声明接受state参数
    const { id, title } = this.props.location.state || {}
    const findResult = this.state.detailData.find(
      (item) => { return item.id === id }) || {}
    return (
      <ul>
        <li>id:{id}</li>
        <li>content:{title}</li>
        <li>detail:{findResult.title}
        </li>
      </ul >
    )
  }
}
