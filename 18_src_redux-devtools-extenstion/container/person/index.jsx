import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/action/person'
import { connect } from 'react-redux'
class Person extends Component {
  render() {
    console.log(this.props)
    const { personList } = this.props
    return (
      <div>
        <h2>我是person组件,上放求和为:{this.props.count}</h2>
        <input type="text" placeholder='请输入姓名...' ref={c => this.inputNameRef = c} />
        <input type="text" placeholder='请输入年龄...' ref={c => this.inputAgeRef = c} />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            personList.map(item => {
              return <li key={item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
  addPerson = () => {
    const name = this.inputNameRef.value
    const age = this.inputAgeRef.value
    const personObj = { id: nanoid(), name, age }
    console.log(personObj)
    this.props.addPerson(personObj)
  }
}
export default connect(
  state => ({ personList: state.personList, count: state.count }),
  {
    addPerson: createAddPersonAction
  }
)(Person)
