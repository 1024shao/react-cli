import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import Header from '../../components/MyHeader'

export default class Home extends Component {
  render() {
    return (
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <div>
              <Header />
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink to='/home/news' children='News' />
                  </li>
                  <li>
                    <MyNavLink to='/home/message' children='Message' />
                  </li>
                </ul>
                <Switch>
                  <Route path='/home/news' component={News} />
                  <Route path='/home/message' component={Message} />
                  <Redirect to='/home/news' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
