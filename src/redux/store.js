import { createStore, applyMiddleware, combineReducers } from 'redux'
// 通过thunk实现异步action
import thunk from 'redux-thunk'

import countReducer from './reducer/count'
import personReducer from './reducer/person'
const allReducer = combineReducers({
  count: countReducer,
  personList: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))