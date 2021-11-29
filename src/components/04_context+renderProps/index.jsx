import React, { Component, Fragment, PureComponent } from 'react'
const Context = React.createContext()
const { Provider, Consumer } = Context
export default class Demo extends Component {
  state = { name: 'vujson' }

  render() {
    return (
      <Provider value={this.state.name} >
        <h2>A组件的名字是:{this.state.name}</h2>
        <button onClick={this.changeName}>changeName</button>
        <B />
      </Provider>
    )
  }
  changeName = () => {
    const data = Math.random() + '11'
    this.setState({ name: data })
  }
}
class B extends PureComponent {
  render() {
    console.log('b---render')
    return (
      <Fragment>
        <h2>b组件的名字是</h2>
        <C render={carName => <D carName={carName} />} />
      </Fragment>
    )
  }
}
class C extends PureComponent {
  static contextType = Context
  state = { carName: '迈巴克' }
  render() {
    const { carName } = this.state
    console.log('c---render')
    return (
      <Fragment>
        <h2>C组件的名字是{this.context}</h2>
        {this.props.render(carName)}
      </Fragment>
    )
  }
}
class D extends Component {
  render() {
    console.log('d---render', this.props)
    return (
      < h2 > D组件的名字是:{this.props.carName}
      </h2 >
    )
  }
}
