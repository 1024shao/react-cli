import { createStore, applyMiddleware } from 'redux'

import countReducer from './count_reducer'
// 通过thunk实现异步action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))