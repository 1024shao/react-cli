import { INCREMENT, DECREMENT } from '../constant'
import store from '../store'
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

export const createIncrementAsyncAction = (value, time = 500) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(value))
    }, time);
  }
}
