import { ADD_PERSON } from "../constant";

const initState = [{ id: '0001', name: '吴海鑫', age: 20 }]
export default function personReducer(preSate = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preSate]  //这里会进行前比较,所以使用preState.unshift(data)不能引起变化
    default:
      return preSate
  }
}