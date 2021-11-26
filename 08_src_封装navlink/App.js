import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              <MyNavLink to='/home' children='Home' />
              <MyNavLink to='/about' children='About' />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <Routes>
                  <Route path='/home' element={<Home />} />
                  <Route path='/about' element={<About />} />
                </Routes> */}
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
