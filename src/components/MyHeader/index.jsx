import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div>
        <h2>HELLO REACT</h2>
        <button onClick={this.back}>back</button>
      </div>
    )
  }
  back = () => {
    this.props.history.goBack()
    console.log('back', this.props)
  }
}
export default withRouter(Header)

