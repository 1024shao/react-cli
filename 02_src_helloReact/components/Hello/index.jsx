import React, { Component } from "react";
import hello from './hello.module.css'
export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2 className={hello.title}>HELLO REACT</h2>
      </div>
    )
  }
}