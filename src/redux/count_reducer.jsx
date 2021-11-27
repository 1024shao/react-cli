const initCount = 0
export default function countReducer(preStore = initCount, action) {
  const { type, data } = action
  switch (type) {
    case 'increment': {
      return preStore + data
    }
    case 'decrement': {
      return preStore - data
    }
  }
  return preStore
}