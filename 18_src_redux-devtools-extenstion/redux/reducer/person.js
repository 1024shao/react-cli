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

// action 和 reducer 都必须是一个纯函数
/*
  不能修改参数
  不能调用math.random() date.now()等不纯的方法
  不会产生任何副作用,例如网络请求,io操作
*/