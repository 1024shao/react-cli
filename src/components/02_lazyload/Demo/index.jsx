import React, { Component, lazy, Suspense } from 'react'

import { NavLink, Switch, Route } from 'react-router-dom'
// import Home from '../Home'
// import About from '../About'
const Home = lazy(() => import('../Home'))
const About = lazy(() => import('../About'))
export default class Demo extends Component {
  render() {
    return (
      <div>
        <h2>我是demo组件</h2>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <hr />
        <Switch>
          <Suspense fallback={<h2>is loading</h2>}>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
          </Suspense>
        </Switch>
      </div>
    )
  }
}
