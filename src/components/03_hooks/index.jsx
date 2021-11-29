import React from "react"
import reactDom from "react-dom"
function Demo() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('jack')
  const myRef = React.useRef()
  function add() {
    setCount(count + 1)
  }
  function unmount() {
    reactDom.unmountComponentAtNode(document.getElementById('root'))
  }
  function show() {
    console.log(myRef.current.value)
  }
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h2>当前求和为:{count}</h2>
      <h2>my Name is {name} </h2>
      <input type="text" ref={myRef} />
      <button onClick={show}>提示input值</button>
      &nbsp;<button onClick={add}>+1</button>
      <button onClick={() => { setName('spencer') }}>修改名字</button>
      <button onClick={unmount}>卸载组件</button>
    </div>
  )
}
export default Demo