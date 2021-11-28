const initCount = 0
export default function countReducer(preState = initCount, action) {
  const { type, data } = action
  switch (type) {
    case 'increment': {
      return preState + data
    }
    case 'decrement': {
      return preState - data
    }
    default:
      return preState
  }

}