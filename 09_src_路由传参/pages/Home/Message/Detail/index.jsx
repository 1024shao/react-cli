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
    // const { match: { params } } = this.props
    const { search } = this.props.location
    const result = qs.parse(search.slice(1))
    console.log(result)
    return (
      <ul>
        <li>id:{result.id}</li>
        <li>content:{result.title}</li>
        <li>detail:
          {this.state.detailData.filter(item => item.id === result.id)[0].title}
        </li>
      </ul>
    )
  }
}
