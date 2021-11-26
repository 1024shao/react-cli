| title | date                      |
| ----- | ------------------------- |
| react | 2021-01-20 03:13:20 -0800 |

> 以下是观看尚硅谷 React 课程所做的笔记。
>
> [尚硅谷 React](https://www.bilibili.com/video/BV1wy4y1D7JT?p=43&t=5)

# React 简介

**react 是什么？**

React 用于构建用户界面的 JS 库。是一个将数据渲染为 HTML 视图的开源 JS 库。

**为什么学？**

1.原生 JS 操作 DOM 繁琐，效率低

2.使用 JS 直接操作 DOM,浏览器会进行大量的重绘重排

3.原生 JS 没有组件化编码方案，代码复用低

> 在学习之前最好看一下关于 npm 的知识：下面是我在网上看见的一个写的还不错的 npm 的文章
>
> [npm](https://blog.csdn.net/qq_25502269/article/details/79346545)

# React 入门

## React 基础案例

1.先导入三个包：

【先引入 react.development.js，后引入 react-dom.development.js】

```tex
react.development.js // react核心库
react-dom.development.js
babel.min.js
```

2.创建一个容器

3.创建虚拟 DOM，渲染到容器中

```html
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js" type="text/javascript"></script>

<!--这里使用了babel用来解析jsx语法-->
<script type="text/babel">
        // 1.创建虚拟DOM
        const VDOM = <h1>Hello</h1>  //这个地方使用的是JSX语法，不需要加""
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(VDOM,document.getElementById("test"));
</script>
</html>
```

这样，就会在页面中的这个 div 容器上添加这个 h1.

[![渲染结果](https://github.com/xzlaptt/React/raw/main/react/1611196030416.png)](https://github.com/xzlaptt/React/blob/main/react/1611196030416.png)

## JSX 基础语法

1.定义虚拟 DOM，不能使用“”

2.标签中混入 JS 表达式的时候使用{}

3.样式的类名指定不要使用 class，使用 className

4.内敛样式要使用双大括号包裹

5.不能有多个根标签，只能有一个跟标签

6.标签必须闭合

7.如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错

> 关于 JS 表达式和 JS 语句：
>
> JS 表达式：返回一个值，可以放在任何一个需要值的地方 a a+b demo(a) arr.map() function text(){} JS 语句：if(){} for(){} while(){} swith(){} 不会返回一个值

实例如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .sss {
        color: red;
      }
    </style>
  </head>
  <body>
    <!-- 准备好容器 -->
    <div id="test"></div>
  </body>
  <!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
  <script src="../js/react.development.js" type="text/javascript"></script>
  <script src="../js/react-dom.development.js" type="text/javascript"></script>

  <script src="../js/babel.min.js"></script>
  <!--这里使用了js来创建虚拟DOM-->
  <script type="text/babel">
    const MyId = 'title'
    const MyData = 'Cyk'
    // 1.创建虚拟DOM
    const VDOM = (
      <h1 id={MyId.toLocaleUpperCase()}>
        <span className="sss" style={{ fontSize: '50px' }}>
          sss
        </span>
      </h1>
    )
    // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
    ReactDOM.render(VDOM, document.getElementById('test'))
  </script>
</html>
```

## 两种创建虚拟 DOM 的方式

**1.使用 JSX 创建虚拟 DOM**

```js
const VDOM = (
  <h1 id={MyId.toLocaleUpperCase()}>
    <span className="sss" style={{ fontSize: '50px' }}>
      sss
    </span>
  </h1>
)
```

这个在上面的案例中已经演示过了 ，下面看看另外一种创建虚拟 DOM 的方式

**2.使用 JS 创建虚拟 DOM**

```js
// 1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)
const VDOM = React.createElement('h1', { id: 'title' }, 'nihao')
```

使用 JS 和 JSX 都可以创建虚拟 DOM，但是可以看出 JS 创建虚拟 DOM 比较繁琐，尤其是标签如果很多的情况下，所以还是比较推荐使用 JSX 来创建。

# 组件

当应用是以多组件的方式实现，这个应用就是一个组件化的应用

> **注意：** 组件名称必须以大写字母开头。
>
> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />`代表 HTML 的 div 标签，而`< Weclome /> 则代表一个组件，并且需在作用域内使用 `Welcome`
>
> 传递的参数，不能在组件中改动

## 函数式组件

```html
//1.先创建函数，函数可以有参数，也可以没有，但是必须要有返回值 返回一个虚拟DOM
function Welcome(props) { return
<h1>Hello, {props.name}</h1>
; } //2.进行渲染 ReactDOM.Render(<Welcom
  name="ss"
/>,document.getElementById("div"));
```

[![结果](https://github.com/xzlaptt/React/raw/main/react/1611211670211.png)](https://github.com/xzlaptt/React/blob/main/react/1611211670211.png)

让我们来回顾一下这个例子中发生了什么：

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `Hello, Sara` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `Hello, Sara`。

## Class 组件

```jsx
//必须继承React.Component
//然后重写Render()方法，该方法一定要有返回值，返回一个虚拟DOM
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
//渲染 【这个跟之前也是一样的】
ReactDOM.Render(<Welcom name="ss" />, document.getElementById('div'))
```

执行过程：

1.React 解析组件标签，找到相应的组件

2.发现组件是类定义的，随后 new 出来的类的实例，并通过该实例调用到原型上的 render 方法

3.将 render 返回的虚拟 DOM 转化为真实的 DOM,随后呈现在页面中

## 组件案例

下面，我们通过一个案例更好的理解组件：【只关注与核心代码】

我们发现组件是可以包含中使用的， 而且如果创建的数组，必须要代一个 key。数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值

```jsx
<script type="text/babel">

        //创建一个组件<li>
        function GetLi(props){
            return <li>{props.value}</li>
        };

        // 1.创建类式组件<ul>
        class MyComponent extends React.Component{
            render(){
                console.log(this.props.arr);
                let com = this.props.arr.map((item,index)=>
                     //在这个地方包含了GetLi这个组件，【注意不能用{}】
                     //因为这个是一个列表，所以必须传递一个key【独一无二的Key】
                     //key 帮助 React 识别哪些元素改变了，比如被添加或删除。
                        <GetLi value={item} key = {index} />
                    );
                console.log(com);
                return <ul>{com}</ul>
            }
        }

        let num = [1,2,3,4]
        //2.渲染组件
        ReactDOM.render(<MyComponent  arr={num}/>,document.getElementById("test");
</script>
```

# 组件实例的三大属性

## state

我们都说 React 是一个状态机，体现是什么地方呢，就是体现在 state 上，通过与用户的交互，实现不同的状态，然后去渲染 UI,这样就让用户的数据和界面保持一致了。state 是组件的私有属性。

在 React 中，更新组件的 state，结果就会重新渲染用户界面(不需要操作 DOM),一句话就是说，用户的界面会随着状态的改变而改变。

state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）

**案例**：

1.需求：页面显示【今天天气很炎热】，鼠标点击文字的时候，页面更改为【今天天气很凉爽】

核心代码如下：

```jsx
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<!--这里使用了js来创建虚拟DOM-->
<script type="text/babel">
        //1.创建组件
        class St extends React.Component{
            constructor(props){
                super(props);
                //先给state赋值
                this.state = {isHot:true,win:"ss"};
                //找到原型的dem，根据dem函数创建了一个dem1的函数，并且将实例对象的this赋值过去
                this.dem1 = this.dem.bind(this);
            }
            //render会调用1+n次【1就是初始化的时候调用的，n就是每一次修改state的时候调用的】
            render(){ //这个This也是实例对象
                //如果加dem()，就是将函数的回调值放入这个地方
                //this.dem这里面加入this，并不是调用，只不过是找到了dem这个函数，在调用的时候相当于直接调用，并不是实例对象的调用
                return <h1 onClick = {this.dem1}>今天天气很{this.state.isHot?"炎热":"凉爽"}</h1>
            }
            //通过state的实例调用dem的时候，this就是实例对象
            dem(){
                const state =  this.state.isHot;
                 //状态中的属性不能直接进行更改，需要借助API
                // this.state.isHot = !isHot; 错误
                //必须使用setState对其进行修改，并且这是一个合并
                this.setState({isHot:!state});
            }
        }
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(<St />,document.getElementById("test"));
</script>
```

需要注意的是：

1.组件的构造函数，必须要传递一个 props 参数

2.特别关注 this【重点】，类中所有的方法局部都开启了严格模式，如果直接进行调用，this 就是 undefined

3.想要改变 state,需要使用 setState 进行修改，如果只是修改 state 的部分属性，则不会影响其他的属性，这个只是合并并不是覆盖。

this.setState()，该方法接收两种参数：对象或函数。

1. 对象：即想要修改的 state
2. 函数：接收两个函数，第一个函数接受两个参数，第一个是当前 state，第二个是当前 props，该函数返回一个对象，和直接传递对象参数是一样的，就是要修改的 state；第二个函数参数是 state 改变后触发的回调

在此还需要注意的是，setState 有异步更新和同步更新两种形式，那么什么时候会同步更新，什么时候会异步更新呢？

**React 控制之外的事件中调用 setState 是同步更新的。比如原生 js 绑定的事件，setTimeout/setInterval 等**。

**大部分开发中用到的都是 React 封装的事件，比如 onChange、onClick、onTouchMove 等，这些事件处理程序中的 setState 都是异步处理的。**

```jsx
//1.创建组件
class St extends React.Component {
  //可以直接对其进行赋值
  state = { isHot: 10 }
  render() {
    //这个This也是实例对象
    return <h1 onClick={this.dem}>点击事件</h1>
  }
  //箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
  dem = () => {
    //修改isHot
    this.setState({ isHot: this.state.isHot + 1 })
    console.log(this.state.isHot)
  }
}
```

上面的案例中预期 setState 使得 isHot 变成了 11，输出也应该是 11。然而在控制台打印的却是 10，也就是并没有对其进行更新。这是因为异步的进行了处理，在输出的时候还没有对其进行处理。

```jsx
componentDidMount(){
    document.getElementById("test").addEventListener("click",()=>{
        this.setState({isHot: this.state.isHot + 1});
        console.log(this.state.isHot);
    })
}
```

但是通过这个原生 JS 的，可以发现，控制台打印的就是 11，也就是已经对其进行了处理。也就是进行了同步的更新。

**React 怎么调用同步或者异步的呢？**

在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中延时更新，而 isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state；但是，有一个函数 batchedUpdates，该函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates 将 isBatchingUpdates 修改为 true，这样由 React 控制的事件处理过程 setState 不会同步更新 this.state。

**如果是同步更新，每一个 setState 对调用一个 render，并且如果多次调用 setState 会以最后调用的为准，前面的将会作废；如果是异步更新，多个 setSate 会统一调用一次 render**

```jsx
dem = () => {
  this.setState({
    isHot: 1,
    cont: 444,
  })
  this.setState({
    isHot: this.state.isHot + 1,
  })
  this.setState({
    isHot: 888,
    cont: 888,
  })
}
```

上面的最后会输出：isHot 是 888，cont 是 888

```jsx
dem = () => {
  this.setState({
    isHot: this.state.isHot + 1,
  })
  this.setState({
    isHot: this.state.isHot + 1,
  })
  this.setState({
    isHot: this.state.isHot + 888,
  })
}
```

初始 isHot 为 10，最后 isHot 输出为 898，也就是前面两个都没有执行。

**注意！！这是异步更新才有的，如果同步更新，每一次都会调用 render，这样每一次更新都会 **

**简化版本：**

1.state 的赋值可以不再构造函数中进行

2.使用了箭头函数，将 this 进行了改变

```jsx
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<script type="text/babel">
        class St extends React.Component{
            //可以直接对其进行赋值
            state = {isHot:true};
            render(){ //这个This也是实例对象
                return <h1 onClick = {this.dem}>今天天气很{this.state.isHot?"炎热":"凉爽"}</h1>
                //或者使用{()=>this.dem()也是可以的}
            }
            //箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
            dem = () =>{
                console.log(this);
                const state =  this.state.isHot;
                this.setState({isHot:!state});
            }
        }
        ReactDOM.render(<St />,document.getElementById("test"));
</script>
```

如果想要在调用方法的时候传递参数，有两个方法：

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button><button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和 [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 `bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。

## Props

Props 主要用来传递数据，比如组件之间进行传值

基本使用：

```jsx
<body>
    <div id = "div">

    </div>

</body>
<script type="text/babel">
    class Person extends React.Component{
        render(){
            return (
                <ul>
                    //接受数据并显示
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
    }
    //传递数据
    ReactDOM.render(<Person name="tom" age = "41" sex="男"/>,document.getElementById("div"));
</script>
```

如果传递的数据是一个对象，可以更加简便的使用

```jsx
<script type="text/babel">
    class Person extends React.Component{
        render(){
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
    }
    const p = {name:"张三",age:"18",sex:"女"}
   ReactDOM.render(<Person {...p}/>,document.getElementById("div"));
</script>
```

... 这个符号恐怕都不陌生，这个是一个展开运算符，主要用来展开数组，如下面这个例子：

```jsx
arr = [1, 2, 3]
arr1 = [4, 5, 6]
arr2 = [...arr, ...arr1] //arr2 = [1,2,,3,4,5,6]
```

但是他还有其他的用法：

1.复制一个对象给另一个对象{...对象名}。此时这两个对象并没有什么联系了

```jsx
const p1 = { name: '张三', age: '18', sex: '女' }
const p2 = { ...p1 }
p1.name = 'sss'
console.log(p2) //{name:"张三",age:"18",sex:"女"}
```

2.在复制的时候，合并其中的属性

```jsx
const p1 = { name: '张三', age: '18', sex: '女' }
const p2 = { ...p1, name: '111', hua: 'ss' }
p1.name = 'sss'
console.log(p2) //{name: "111", age: "18", sex: "女",hua:"ss"}
```

**注意！！** **{...P}并不能展开一个对象**

**props 传递一个对象，是因为 babel+react 使得{..p}可以展开对象，但是只有在标签中才能使用**

**对于 props 限制**

很多时候都想要传递的参数进行相应的限制，比如：限制传递参数的类型，参数的默认值等等

react 对此提供了相应的解决方法：

- propTypes:类型检查，还可以限制不能为空
- defaultProps：默认值

```jsx
<script type="text/babel">


    class Person extends React.Component{
        render(){
            //props是只读的
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
        //对组件的属性对其进行限制
        static propTypes = {
            name:PropTypes.string.isRequired, //限定name是string类型，并且必须要传递
            sex:PropTypes.string,  //限定sex是string类型
            speak:PropTypes.func   //限定speak是function类型
        }
        //指定默认的标签属性
        static defaultProps = {
            sex:"不男不女",
            age:18
        }

    }
    //在js中可以使用{...p}来复制一个对象，但是这个地方并不是复制对象，而是babel+react通过展开运算符，展开了一个对象
    //但是只能在标签中进行使用
    //const p = {name:"张三",age:"18",sex:"女"}   {14}就代表的是数值
    //ReactDOM.render(<Person {...p}/>,document.getElementById("div"));
    ReactDOM.render(<Person name="sss" age = {14} speak="8"/>,document.getElementById("div"));


    function speak(){
        console.log("这个是一个函数")
    }

</script>
</html>
```

**函数式组件的使用**：

函数在使用 props 的时候，是作为参数进行使用的(props)；

```jsx
function Person(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.sex}</li>
    </ul>
  )
}
```

## Refs

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

Refs 主要提供了三种方式：

**1.字符串形式**

在想要获取到一个 DOM 节点，可以直接在这个节点上添加 ref 属性。利用该属性进行获取该节点的值。

案例：给需要的节点添加 ref 属性，此时该实例对象的 refs 上就会有这个值。就可以利用实例对象的 refs 获取已经添加节点的值

```jsx
;<input ref="dian" type="text" placeholder="点击弹出" />

inputBlur = () => {
  alert(this.refs.shiqu.value)
}
```

**2.回调形式**

回调形式会在 ref 属性中添加一个回调函数。将该 DOM 作为参数传递过去。

如：ref 里面就是一个回调函数，self 就是该 input 标签。然后在将该 DOM 元素赋值给实例对象中的一个属性

```jsx
<input
  ref={(self) => {
    this.dian = self
    console.log(self)
  }}
  placeholder="点击弹出"
/>
```

[![input标签](https://github.com/xzlaptt/React/raw/main/react/1611495051999.png)](https://github.com/xzlaptt/React/blob/main/react/1611495051999.png)

也可以将函数提取出来，在 ref 中进行调用

```jsx
isRef = (self) => {
  this.dian = self
  console.log(self)
}

;<input ref={this.isRef} type="text" placeholder="点击弹出" />
```

**3.API 形式**

React 其实已经给我们提供了一个相应的 API，他会自动的将该 DOM 元素放入实例对象中

如下：依旧先在 DOM 元素中添加一个 ref 元素

```jsx
{/*<input ref={this.容器名称} type="text" placeholder="点击弹出" />*/}
<input ref={this.MyRef} type="text" placeholder="点击弹出" />
<input ref={this.MyRef1} type="text" placeholder="点击弹出" />
```

通过 API，创建 React 的容器，相当于省略了回调的中间环节。但是这个容器是专门专用的，所以每一个 ref 都需要创建这个。该 API 会将 DOM 元素赋值给实例对象的名称为容器名称的属性的 current【这个 current 是固定的】

```jsx
{
  /*容器名称 = React.createRef()*/
}
MyRef = React.createRef()
MyRef1 = React.createRef()
```

[![API](https://github.com/xzlaptt/React/raw/main/react/1611495597978.png)](https://github.com/xzlaptt/React/blob/main/react/1611495597978.png)

然后就可以使用了

```
btnOnClick = () =>{
    //创建之后，将自身节点，传入current中
    console.log(this.MyRef.current.value);
}
```

**官方提示我们不要过度的使用 ref，如果发生时间的元素刚好是需要操作的元素，就可以使用事件去替代。**

# React 事件

React 的事件是通过 onXxx 属性指定事件处理函数

React 使用的都是自定义的时间，而不是原生的事件

React 中的事件是通过事件委托方式处理的

事件中必须返回的是函数

通过 event.target 得到发生事件的 Dom 元素对象

比如：

先声明一个事件，然后在根据事件创建相应的函数，根据事件的 event 参数，将 DOM 元素获取到。

```jsx
;<input onChange={this.saveName} type="text" name="username" />

saveName = (event) => {
  this.setState({ name: event.target.value })
}
```

**受控和非受控组件**

先来说说受控组件：

使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

```jsx
saveName = (event) =>{
  this.setState({name:event.target.value});
}

savePwd = (event) => {
  this.setState({pwd:event.target.value});
}

render() {
  return (
    <form action="http://www.baidu.com" onSubmit={this.login}>
      用户名：<input value={this.state.name} onChange={this.saveName} type = "text" />
      密码<input value={this.state.pwd} onChange={this.savePwd} type = "password"/>
      <button>登录</button>
    </form>
  )
}
```

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。由于 `onchange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。

非受控组件：

非受控组件其实就是表单元素的值不会更新 state。输入数据都是现用现取的。

如下：下面并没有使用 state 来控制属性，使用的是事件来控制表单的属性值。

```jsx
class Login extends React.Component {
  login = (event) => {
    event.preventDefault() //阻止表单提交
    console.log(this.name.value)
    console.log(this.pwd.value)
  }
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.login}>
        用户名：
        <input ref={(self) => (this.name = self)} type="text" name="username" />
        密码：
        <input
          ref={(self) => (this.pwd = self)}
          type="password"
          name="password"
        />
        <button>登录</button>
      </form>
    )
  }
}
```

**高级函数**

1.如果函数的参数是函数

2.如果函数返回一个函数

**函数的珂里化**

通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

如下，我们将上面的案例简化，创建高级函数：

```jsx
class Login extends React.Component {
  state = { name: '', pwd: '' }

  //返回一个函数
  saveType = (type) => {
    return (event) => {
      this.setState({ [type]: event.target.value })
    }
  }

  //因为事件中必须是一个函数，所以返回的也是一个函数，这样就符合规范了
  render() {
    return (
      <form>
        <input onChange={this.saveType('name')} type="text" />
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('div'))
```

# 生命周期

## （旧）

组件从创建到死亡，会经过一些特定的阶段

React 组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用

我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作

如下图是旧生命周期的结构图：

[![旧生命周期](https://github.com/xzlaptt/React/raw/main/react/1611490156766.png)](https://github.com/xzlaptt/React/blob/main/react/1611490156766.png)

我们通过一个案例更详细的了解这个生命周期：

```js
class A extends React.Component {
  constructor(props) {
    console.log('A --- constructor')
    super(props)
    this.state = { num: 1 }
  }

  add = () => {
    let { num } = this.state
    this.setState({ num: num + 1 })
    //强制更新
    //this.forceUpdate();
  }

  render() {
    console.log('A --- render')
    return (
      <div>
        <h1>这个是第{this.state.num}个</h1>
        <B name={this.state.num} />
        <button onClick={this.add}>点击加一</button>
      </div>
    )
  }

  //在render之前执行
  componentWillMount() {
    console.log('A --- componentWillMount')
  }

  //在render之后执行
  componentDidMount() {
    console.log('A --- componenetDidMount')
  }

  //更新操作 setState之后执行，判断是否可以更新（true可以，false不可以）
  shouldComponentUpdate() {
    console.log('A --- shouldComponentUpdate')
    return true
  }
  // 组件将要更新之前
  componentWillUpdate() {
    console.log('A --- componentWillUpdate')
  }
  //组件更新之后，该函数可以接受相应的参数
  componentDidUpdate() {
    console.log('A --- componentDidUpdate')
  }

  //卸载组件之后
  componentWillUnmonut() {
    console.log('A --- componentWillUnmonut')
  }
}
class B extends React.Component {
  render() {
    return (
      <div>
        <h1>这个是B组件,传递过来的是：{this.props.name}</h1>
      </div>
    )
  }
  //父组件进行了更新，子组件先执行这个【注意，第一次传递数据的时候，并不执行】
  componentWillReceiveProps() {
    console.log('A --- componentWillReceiveProps')
  }
}
ReactDOM.render(<A />, document.getElementById('div'))
```

我们在控制台看一下：

当我们刚刚打开控制台的时候，组件第一次加载：

[![组件第一次加载](https://github.com/xzlaptt/React/raw/main/react/1611568192158.png)](https://github.com/xzlaptt/React/blob/main/react/1611568192158.png)

当我们点击按钮更新 sate 的时候：

[![更新state](https://github.com/xzlaptt/React/raw/main/react/1611568250881.png)](https://github.com/xzlaptt/React/blob/main/react/1611568250881.png)

## （新）

在最新的 react 版本中，有些生命周期钩子被抛弃了，在官网中是这样说的：

我们得到最重要的经验是，过时的组件生命周期往往会带来不安全的编码实践，具体函数如下：

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

**这些生命周期方法经常被误解和滥用**；此外，我们预计，在异步渲染中，它们**潜在的误用问题可能更大**。我们将在即将发布的版本中为这些生命周期添加 “UNSAFE\_” 前缀。（这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有可能出现 bug，尤其是在启用异步渲染之后。）

由此可见，新版本中并不推荐持有这三个函数，取而代之的是带有 UNSAFE* 前缀的三个函数，比如: UNSAFE* componentWillMount。即便如此，其实 React 官方还是不推荐大家去使用，在以后版本中有可能会去除这几个函数。

如下图是新的生命周期：

[![新生命周期](https://github.com/xzlaptt/React/raw/main/react/1611651795885.png)](https://github.com/xzlaptt/React/blob/main/react/1611651795885.png)

从图上可以看出，新生命周期和旧生命周期的区别主要有：

1.抛弃了上面所说的三个钩子函数【其实还可以使用】

2.新添加了两个钩子函数

现在重点说一下，新添加的钩子函数

**static getDerivedStateFromProps(props, state)**

首先，该函数会调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用；该函数必须是静态的；给组件传递的数据（props）以及组件状态（state），会作为参数到这个函数中；该函数也必须有返回值，返回一个 Null 或者 state 对象。因为初始化和后续更新都会执行这个方法，因此在这个方法返回 state 对象，就相当于将原来的 state 进行了覆盖，所以倒是修改状态不起作用。

**getSnapshotBeforeUpdate(prevProps, prevState)**

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递`componentDidUpdate()`。

> 补充一下：componentDidUpdate(prevProps, prevState, snapshot)
>
> 该生命周期函数，可以有三个参数：原始传过来的参数，最开始的状态，getSnapshotBeforeUpdate 传递的值
>
> 关于更多关于生命周期的介绍，可以参考官方文档：
>
> https://zh-hans.reactjs.org/docs/react-component.html#render

以上就是两个新添加的钩子函数，但是在现实开发中可能并不常用这两个。

**案例：在一个区域内，定时的输出以行话，如果内容大小超过了区域大小，就出现滚动条，但是内容不进行移动 **

[![案例](https://github.com/xzlaptt/React/raw/main/react/BeforeGender.gif)](https://github.com/xzlaptt/React/blob/main/react/BeforeGender.gif)

如上面的动图：区域内部的内容展现没有变化，但是可以看见滚动条在变化，也就是说上面依旧有内容在输出，只不过不在这个区域内部展现。

**实现：**

【一些 css 样式，就不在这展示了】

1.首先我们先实现定时输出内容

我们可以使用 state 状态，改变新闻后面的值，但是为了同时显示这些内容，我们应该为 state 的属性定义一个数组。并在创建组件之后开启一个定时器，不断的进行更新 state。更新渲染组件

```jsx
class New extends React.Component {
  state = { num: [] }

  //在组件创建之后,开启一个定时任务
  componentDidMount() {
    setInterval(() => {
      let { num } = this.state
      const news = num.length + 1
      this.setState({ num: [news, ...num] })
    }, 2000)
  }

  render() {
    return (
      <div ref="list" className="list">
        {this.state.num.map((n, index) => {
          return (
            <div className="news" key={index}>
              新闻{n}
            </div>
          )
        })}
      </div>
    )
  }
}
ReactDOM.render(<New />, document.getElementById('div'))
```

2.接下来就是控制滚动条了

我们在组件渲染到 DOM 之前获取组件的高度，然后用组件渲染之后的高度减去之前的高度就是一条新的内容的高度，这样在不断的累加到滚动条位置上。

```jsx
getSnapshotBeforeUpdate(){
	return this.refs.list.scrollHeight;
}

componentDidUpdate(preProps,preState,height){
	this.refs.list.scrollTop += (this.refs.list.scrollHeight - height);
}
```

这样就实现了这个功能。

# Diff 算法

提到这个算法，就必须说一下关于 Key 的事情了。

其实每个组件中的每个标签都会有一个 key,只不过有的必须显示的指定，有的可以隐藏。

如果生成的 render 出来后就不会改变里面的内容，那么你不需要指定 key（不指定 key 时，React 也会生成一个默认的标识）,或者将 index 作为 key，只要 key 不重复即可。

但是如果你的标签是动态的，是有可能刷新的，就必须显示的指定 key。必须上面案使用 map 进行便利的时候就必须指定 Key:

```jsx
this.state.num.map((n, index) => {
  return (
    <div className="news" key={index}>
      新闻{n}
    </div>
  )
})
```

这个地方虽然显示的指定了 key，但是**官网并不推荐使用 Index 作为 Key 去使用**；

这样会很有可能会有效率上的问题

举个例子：

在一个组件中，我们先创建了两个对象，通过循环的方式放入< li>标签中，此时 key 使用的是 index。

```jsx
person: [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
]

this.state.person.map((preson, index) => {
  return <li key={index}>{preson.name}</li>
})
```

如下图展现在页面中：

[![原始对象数组](https://github.com/xzlaptt/React/raw/main/react/1611800406864.png)](https://github.com/xzlaptt/React/blob/main/react/1611800406864.png)

此时，我们想在点击按钮之后动态的添加一个对象，并且放入到 li 标签中，在重新渲染到页面中。

我们通过修改 State 来控制对象的添加。

```jsx
;<button onClick={this.addObject}>点击增加对象</button>
addObject = () => {
  let { person } = this.state
  const p = { id: person.length + 1, name: '王五', age: 20 }
  this.setState({ person: [p, ...person] })
}
```

如下动图所示：

[![原始对象数组](https://github.com/xzlaptt/React/raw/main/react/addObject.gif)](https://github.com/xzlaptt/React/blob/main/react/addObject.gif)

这样看，虽然完成了功能。但是其实存在效率上的问题， 我们先来看一下两个前后组件状态的变化：

[![组件状态的变化](https://github.com/xzlaptt/React/raw/main/react/1611800988496.png)](https://github.com/xzlaptt/React/blob/main/react/1611800988496.png)

我们发现，组件第一个变成了王五，张三和李四都移下去了。因为我们使用 Index 作为 Key，这三个标签的 key 也就发生了改变【张三原本的 key 是 0，现在变成了 1，李四的 key 原本是 1，现在变成了 2，王五变成了 0】在组件更新状态重新渲染的时候，就出现了问题：

因为 react 是通过 key 来比较组件标签是否一致的，拿这个案例来说：

首先，状态更新导致组件标签更新，react 根据 Key，判断旧的虚拟 DOM 和新的虚拟 DOM 是否一致

key = 0 的时候 旧的虚拟 DOM 内容是张三 新的虚拟 DOM 为王五 ，react 认为内容改变，从而重新创建新的真实 DOM.

key = 1 的时候 旧的虚拟 DOM 内容是李四，新的虚拟 DOM 为张三，react 认为内容改变，从而重新创建新的真实 DOM

key = 2 的时候 旧的虚拟 DOM 没有，创建新的真实 DOM

这样原本有两个虚拟 DOM 可以复用，但都没有进行复用，完完全全的都是新创建的；这就导致效率极大的降低。

其实这是因为我们将新创建的对象放在了首位，如果放在最后其实是没有问题的，但是因为官方并不推荐使用 Index 作为 key 值，我们推荐使用 id 作为 key 值。从而完全避免这样的情况。

**用 index 作为 key 可能会引发的问题:**

1。若对数据进行:逆序添加、逆序删除等破坏顺序操作:

会产生没有必要的真实 DOM 更新 界面效果没问题,但效率低。

2．如果结构中还包含输入类的 DOM:

会产生错误 DOM 更新 界面有问题。

3，注意! 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。

**开发如何选择 key?**

最好使用每一条数据的唯一标识作为 key 比如 id，手机号，身份证号

如果确定只是简单的展示数据，用 Index 也是可以的

**而这个判断 key 的比较规则就是 Diff 算法**

Diff 算法其实就是 react 生成的新虚拟 DOM 和以前的旧虚拟 DOM 的比较规则：

- 如果旧的虚拟 DOM 中找到了与新虚拟 DOM 相同的 key:
  - 如果内容没有变化，就直接只用之前旧的真实 DOM
  - 如果内容发生了变化，就生成新的真实 DOM
- 如果旧的虚拟 DOM 中没有找到了与新虚拟 DOM 相同的 key:
  - 根据数据创建新的真实的 DOM,随后渲染到页面上

# React 脚手架

react 提供了一个用于创建 react 项目的脚手架库：create-react-app

## 创建项目并启动

1.全局安装：npm i -g create-react-app

2.创建项目：create-react-app 项目名

在这一步，有可能会出现：

[![不是内部命令](https://github.com/xzlaptt/React/raw/main/react/1611803687193.png)](https://github.com/xzlaptt/React/blob/main/react/1611803687193.png)

这样可以直接使用：npx create-react-app 项目名

3.等待下载完成，进入项目文件夹，运行一下

比如，我这的项目名称是 hello,就先进入 hello 文件夹

cd hello

npm start //启动这个项目

[![启动成功](https://github.com/xzlaptt/React/raw/main/react/1611816095069.png)](https://github.com/xzlaptt/React/blob/main/react/1611816095069.png)

这个时会自动的打开浏览器，展现这个项目：

[![第一个脚手架项目](https://github.com/xzlaptt/React/raw/main/react/1611816150630.png)](https://github.com/xzlaptt/React/blob/main/react/1611816150630.png)

## 项目的目录结构

我们先来看一下 public 这个目录下面的结构：

[![public](https://github.com/xzlaptt/React/raw/main/react/1611817630266.png)](https://github.com/xzlaptt/React/blob/main/react/1611817630266.png)

这里面最主要的还是这个 Index.html 文件：

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!--%PUBLIC_URL%表示public文件夹的路径-->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!--用于开启理想视口，用于移动端页面的适配-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--用于配置浏览器地址栏的颜色（仅支持安卓手机浏览器）-->
    <meta name="theme-color" content="#000000" />
    <!--描述网页信息的-->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!--用于指定网页添加到手机主屏幕后的图标（仅仅支持ios）-->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <!--应用加壳时候的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>React App</title>
  </head>
  <body>
    <!-- 浏览器不支持JS的运行的时候展现 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

src 文件：

[![src文件](https://github.com/xzlaptt/React/raw/main/react/1611818262317.png)](https://github.com/xzlaptt/React/blob/main/react/1611818262317.png)

这里面其实最主要的就是 App.js 以及 index.js，一个是组件，一个是将组件渲染到页面中的。

## 第一个脚手架应用

1.我们保持 public 中的 Index.html 不变

2.修改 src 下面的 APP.js 以及 index.js 文件

App.js: 【注意：创建好的组件一定要暴露出去】

```jsx
//创建外壳组件APP
import React from 'react'

class App extends React.Component {
  render() {
    return <div>Hello word</div>
  }
}

export default App
```

index.js: 【主要的作用其实就是将 App 这个组件渲染到页面上】

```jsx
//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'
//引入组件
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

这样在重新启动应用，就成功了。

[![第一个脚手架应用](https://github.com/xzlaptt/React/raw/main/react/1611820194124.png)](https://github.com/xzlaptt/React/blob/main/react/1611820194124.png)

我们也不建议这样直接将内容放入 App 组件中，尽量还是用内部组件。

我们在顶一个 Hello 组件：

```jsx
import React, { Componet } from 'react'

export default class Hello extends Componet {
  render() {
    return <h1>Hello</h1>
  }
}
```

在 App 组件中，进行使用

```jsx
class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}
```

这样的结果和前面是一样的。

但是由于普通的 Js 和组件都是 js，所一最好组件使用 jsx 去展示。

## 样式冲突

当组件逐渐增多起来的时候，我们发现，组件的样式也是越来越丰富，这样就很有可能产生两个组件中样式名称有可能会冲突，这样会根据引入 App 这个组件的先后顺序，后面的会覆盖前面的，

为了避免这样的样式冲突，我们采用下面的形式：

1.将 css 文件名修改： hello.css --- >hello.module.css

2.引入并使用的时候改变方式：

```jsx
import React, { Component } from 'react'
import hello from './hello.module.css' //引入的时候给一个名称

export default class Hello extends Component {
  render() {
    return (
      <h1 className={hello.title}>Hello</h1> //通过大括号进行调用
    )
  }
}
```

# 功能界面的组件化编码流程

1.拆分组件:拆分界面，抽取组件

2.实现静态组件

3.实现动态组件

- 动态的显示初始化数据
  - 数据类型
  - 数据名称
  - 保存在哪个组件
- 交互

**注意事项：**

1.拆分组件、实现静态组件。注意 className、style 的写法

2.动态初始化列表，如何确定将数据放在哪个组件的 state 中？

- 某个组件使用：放在自身的 state 中
- 某些组件使用：放在他们共同的父组件中【状态提升】

  3.关于父子组件之间的通信

- 父组件给子组件传递数据：通过 props 传递
- 子组件给父组件传递数据：通过 props 传递，要求父组件提前给子组件传递一个函数

  4.注意 defaultChecked 和 checked 区别，defalutChecked 只是在初始化的时候执行一次，checked 没有这个限制，但是必须添加 onChange 方法类似的还有：defaultValue 和 value

  5.状态在哪里，操作状态的方法就在哪里

# react ajax

React 本身只关注与页面，并不包含发送 ajax 请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。

推荐使用 axios。

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求 url 的**协议、域名、端口**三者之间任意一个与当前页面 url 不同即为跨域 。

那么 react 通过代理解决跨域问题呢

**方法一**

> 在 package.json 中追加如下配置

```
"proxy":"请求的地址"      "proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了 3000 不存在的资源时，那么该请求会转发给 5000 （优先匹配前端资源）

**方法二**

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写 setupProxy.js 配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')

   module.exports = function (app) {
     app.use(
       proxy('/api1', {
         //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: { '^/api1': '' }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', {
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: { '^/api2': '' },
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

# 兄弟之间进行通信

这就要借助消息订阅和发布机制。

举个例子来说就是张三想要跟李四进行通信，张三就需要订阅一个消息【比如 A 消息】，李四想要给张三数据，就必须发布一个 A 消息，在发布的同时将数据放入消息中，因为张三订阅了名称为 A 的消息，此时就能接受到李四发布的消息，从而获取到数据。

这就有点类似于看报纸，甲想要知道每天都发生什么事情，于是订阅了每天日报，乙每天都会发布这个每天日报，因为甲订阅了，于是乙就会每天就给甲方推送，甲方从而获取数据。

**在消息订阅和发布中，我们可以使用 PubSubJs 进行通信：**

引入 PubSubJs:

```
import PubSub from 'pubsub-js'
```

订阅消息：

```
PubSub.subscribe("getSate",(_,data)=>{
            console.log(data)
        })
PubSub.subscribe("订阅的消息名称",回调函数，第一个参数是消息名称，可以使用_来占位，第二个是传递的数据
        })
```

发布消息：

```
PubSub.publish("getSate",{isFrist:false,isLoad:true})
PubSub.publish("订阅的消息名称",传递的数据)
```

# async 和 await

**async:**

该关键字是放在函数之前的，使得函数成为一个异步函数，他最大的特点就是将函数回封装成 Promise，也就是被他修饰的函数的返回值都是 Promise 对象。而这个 Promise 对象的状态则是由函数执行的返回值决定的。

如果返回的是一个非 promise 对象，该函数将返回一个成功的 Promise，成功的值则是返回的值；

如果返回的是一个 promise 对象，则该函数返回的就是该 promise 对应的状态。

**await**

await 右边是一个表达式，如果该表达式返回的是一个 Promise 对象，则左边接收的结果就是该 Promise 对象成功的结果，如果该 Promise 对象失败了，就必须使用 try..catch 来捕获。如果该表达式返回的是是一个不是 promise 对象，则左边接受的就是该表达式的返回值。

当 [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) 关键字与异步函数一起使用时，它的真正优势就变得明显了 —— 事实上， **await 只在异步函数里面才起作用**。它可以放在任何异步的，基于 promise 的函数之前。它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。

举个例子：

```
 f1 = () =>{
        return new Promise((resolve,reject)=>{
            // resolve(1);
            reject("错误")
        })
    }

    async function test(){
        try{
           const p =  await f1();
           console.log(p)
        }catch(error){
            console.error(error)
        }
    }
    test();
```

# fetch

以前发送请求，使用 ajax 或者 axios，现在还可以使用 fetch。这个是 window 自带的，和 xhr 是一个级别的。

可以查看这个文章，写的真的不错：

[fetch](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

# React 路由

## SPA

单页 Web 应用(single page web application，SPA)。整个应用只有一个完整的页面。

点击页面中的链接不会刷新页面，只会做页面的局部更新。

数据都需要通过 ajax 请求获取,并在前端异步展现

## 什么是路由

一个路由其实就是一个映射关系（k:v）

key 为路径，value 可能是 function 或者是 component

**后端路由：**

value 是 function，用来处理客户端提交的请求

注册路由：router.get(path,function(req,res))

工作过程：当 node 接收一个请求的时候，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应的数据

**前端路由：**

浏览器端路由，value 是 Component，用于展示页面内容

注册路由：< Route path="/test" component={Test}>

工作过程：当浏览器的 path 变为/test 的时候，当前路由组件就会变成 Test 组件

**前端路由的原理**

这个主要是依靠于 history，也就是浏览器的历史记录。

浏览器上的记录其实就是一个栈，前进一次就是入栈，后退一次就是出栈。

并且历史记录上有一个监听的方法，可以时时刻刻监听记录的变化。从而判断是否改变路径

[History](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

## react-router-dom

react 的路由有三类：

web【主要适用于前端】,native【主要适用于本地】,anywhere【任何地方】

在这主要使用 web 也就是这个标题 react-router-dom

**基本的使用：**

导航中的 a 标签改写成 Link 标签

< Link to="/路径" >xxx< /Link>

展示区写 Route 标签进行路径的匹配

< Route path = '/路径' component={组件名称}>

< App>最外侧包裹了一个< BrowserRouter>或者< HashRouter>

```
<div className="list-group">
    <Link className="list-group-item"  to="/about">About</Link>
    <Link className="list-group-item"  to="/home">Home</Link>
</div>

<div className="panel-body">
    {/* 注册路由，也就是写对应的关系 */}
    <Route path="/about"component={About}/>
    <Route path="/home"component={Home}/>
</div>

index.js:
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root"))
```

那么使用 Link 代替 a 标签之后，在页面上会是什么呢，我们发现其实页面上也是把 link 转化为了 a 标签

**路由组件以及一般组件**

1.写法不一样

一般组件：< Demo>

路由组件：< Route path="/demo" component ={Demo}/>

2.存放的位置一般不同

一般组件：components

路由组件：pages

3.接收的内容【props】

一般组件：写组件标签的时候传递什么，就能收到什么

路由组件：接收到三个固定的属性【history,location,match】

```
history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location:
    pathname: "/about"
    search: ""
    state: undefined

match:
    params: {}
    path: "/about"
    url: "/about"
```

**NavLink**

因为 Link 不能够改变标签体，因此只适合用于一些写死的标签。而如果想要有一些点击的效果，使用 NavLink.

如下代码，就写了 ctiveClassName，当点击的时候就会触发这个 class 的样式

```
{/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
 这是因为Link相当于是把标签写死了，不能去改变什么。*/}

<NavLink  ctiveClassName="ss" className="list-group-item"  to="/about">About</NavLink>
<NavLink className="list-group-item"  to="/home">Home</NavLink>
```

但是可能一个导航又很多标签，如果这样重复的写 NavLink 也会造成很多的重复性的代码问题。

因此可以自定义一个 NavLink：

```
 // 通过{...对象}的形式解析对象，相当于将对象中的属性全部展开
 //<NavLink  to = {this.props.to} children = {this.props.children}/>
<NavLink className="list-group-item" {...this.props}/>
```

在使用的时候：直接写每个标签中不一样的部分就行，比如路径和名称

```
{/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容props是特殊的一个属性，叫做children */}
<MyNavLink to = "/about" >About</MyNavLink>
```

## 样式错误

拿上面的案例来说：

这里面会有一个样式：

[![样式表](https://github.com/xzlaptt/React/raw/main/react/1612316916900.png)](https://github.com/xzlaptt/React/blob/main/react/1612316916900.png)

此时，加载该样式的路径为：

[![加载样式路径](https://github.com/xzlaptt/React/raw/main/react/1612317786643.png)](https://github.com/xzlaptt/React/blob/main/react/1612317786643.png)

但是在写路由的时候，有的时候就会出现多级目录，

```
<MyNavLink to = "/cyk/about" >About</MyNavLink>

<Route path="/cyk/about"component={About}/>
```

这个时候就在刷新页面，就会出现问题：

样式因为路径问题加载失败，此时页面返回 public 下面的 Index.html

[![加载页面失败](https://github.com/xzlaptt/React/raw/main/react/1612317880916.png)](https://github.com/xzlaptt/React/blob/main/react/1612317880916.png)

解决这个问题，有三个方法：

1.样式加载使用绝对位置

```
 <link href="/css/bootstrap.css" rel="stylesheet">
```

2.使用 %PUBLIC_URL%

```
 <link href="%PUBLIC_URL%/css/bootstrap.css" rel="stylesheet">
```

3.使用 HashRouter

因为 HashRouter 会添加#，默认不会处理#后面的路径，所以也是可以解决的

## 模糊匹配和精准匹配

react 默认是开启模糊匹配的。

比如：

```
<MyNavLink to = "/home/a/b" >Home</MyNavLink>
```

此时该标签匹配的路由，分为三个部分 home a b；将会根据这个先后顺序匹配路由。

如下就可以匹配到相应的路由：

```
<Route path="/home"component={Home}/>
```

但是如果是下面这个就会失败，也就是说他是根据路径一级一级查询的，可以包含前面那一部分，但并不是只包含部分就可以。

```
<Route path="/a" component={Home}/>
```

当然也可以使用这个精确的匹配 exact={true}

如以下：这样就精确的匹配/home，则上面的/home/a/b 就不行了

```
<Route exact={true}  path="/home" component={Home}/>
或者
<Route exact path="/home" component={Home}/>
```

## 初始化路由

在配置好路由，最开始打开页面的时候，应该是不会匹配到任意一个组件。这个时候页面就显得极其不合适，此时应该默认的匹配到一个组件。

[![空组件](https://github.com/xzlaptt/React/raw/main/react/RouterDef.gif)](https://github.com/xzlaptt/React/blob/main/react/RouterDef.gif)

此时就需要使用 Redirect 进行默认匹配了。如下的代码就是默认匹配/home 路径所到的组件

```
<Switch>
    <Route path="/about"component={About}/>
    {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
    <Route   path="/home" component={Home}/>
    {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
    <Redirect  to = "/home"/>
</Switch>
```

就可以做到如下的效果：

## [![设置默认值](https://github.com/xzlaptt/React/raw/main/react/RouterSetDef.gif)](https://github.com/xzlaptt/React/blob/main/react/RouterSetDef.gif)嵌套路由

简单来说就是在一个路由组件中又使用了一个路由，就形成了嵌套路由。

举个例子来说：

我们在 home 这个路由组件中又添加两个组件：

```
APP.jsx:
<Route   path="/home" component={Home}/>
Home.jsx:
<div>
    <ul className="nav nav-tabs">
    <li>
    	<MyNavLink to = "/home/news">News</MyNavLink>
    </li>
    <li>
    	<MyNavLink  to = "/home/message">Message</MyNavLink>
    </li>
    </ul>

    <Switch>
        <Route path = "/home/news" component={News} />
        <Route path = "/home/message" component={Message} />
        <Redirect to="/home/message"/>
    </Switch>
</div>
```

react 中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由

比如上面的 /home/news 的路由处理过程：

1.因为父组件 home 的路由是先注册的，因此在匹配的时候先去找 home 的路由，也就是根据/home/news 先模糊匹配到/home

2.在去 Home 组件里面去匹配相应的路由，从而找到了/home/news 进行匹配，因此找到了 News 组件。

但是如果开启精确匹配，就会在第一步的时候卡住，这个时候就走不下去了。**因此不要轻易的使用精确匹配**

# -Ant Design

## 1、相关文档

> ### ant-design(国内蚂蚁金服)
>
> 1. 官网: https://ant.design/index-cn
> 2. Github: https://github.com/ant-design/ant-design/
>
> ### material-ui(国外)
>
> 1. 官网: http://www.material-ui.com/#/
> 2. github: https://github.com/callemall/material-ui

## 2、按需引入与自定义主题

### Ⅰ-安装依赖

> yarn add react-app-rewired customize-cra babel-plugin-import

### Ⅱ-修改 package.json

> ```
>   "scripts": {
>   "start": "react-app-rewired start",
>   "build": "react-app-rewired build",
>   "test": "react-app-rewired test",
>   "eject": "react-scripts eject"
>   },
> ```

### Ⅲ-根目录下创建 config-overrides.js

> 注意:如果按照官方文档的自定义主题进行配置可能会报错,需要多加一层`lessOptions`
>
> ```
> //配置具体的修改规则
> const { override, fixBabelImports,addLessLoader} = require('customize-cra');
> module.exports = override(
>   fixBabelImports('import', {
>   	libraryName: 'antd',
>   	libraryDirectory: 'es',
>   	style: true,
>   }),
>   addLessLoader({
>   	lessOptions:{
>   		javascriptEnabled: true,
>   		modifyVars: { '@primary-color': 'green' },
>   	}
>   }),
> -------------------官方方法,会报错-------------------------
> + addLessLoader({
> +   javascriptEnabled: true,
> +   modifyVars: { '@primary-color': '#1DA57A' },
> + }),
> ---------------------------------------------------------
> );
> ```

### Ⅳ-成功

> 备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

# Ⅵ-Redux

## 1、redux 理解

### Ⅰ-学习文档

> 1. 英文文档: https://redux.js.org/
> 2. 中文文档: http://www.redux.org.cn/
> 3. Github: https://github.com/reactjs/redux

### Ⅱ-redux 是什么

> 1. redux 是一个专门用于做`状态管理的JS库`(不是 react 插件库)。
> 2. 它可以用在 react, angular, vue 等项目中, 但基本与 react 配合使用。
> 3. 作用: 集中式管理 react 应用中多个组件`共享`的状态。

### Ⅲ-什么情况下需要使用 redux

> 1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。
> 2. 一个组件需要改变另一个组件的状态（通信）。
> 3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。

### Ⅳ-redux 工作流程

> ![React系统学习_Redux工作流程原理图](https://gitee.com/spencer1228/blog-img-address/raw/master/img/React%E7%B3%BB%E7%BB%9F%E5%AD%A6%E4%B9%A0_Redux%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%8E%9F%E7%90%86%E5%9B%BE.png)

## 2、redux 的三个核心概念

### Ⅰ-action

> 1. `动作的对象`
>
> 2. 包含 2 个属性
>
>    type：标识属性, 值为字符串, 唯一, 必要属性
>
>    data：数据属性, 值类型任意, 可选属性
>
> 3. 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }

### Ⅱ-reducer

> 1. 用于初始化状态、加工状态。
> 2. 加工时，根据旧的 state 和 action， 产生新的 state 的`纯函数(以下为纯函数概念)``
>
> - ``纯函数:`一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
> - 必须遵守以下一些约束
>   1. 不得改写参数数据
>   2. 不会产生任何副作用，例如网络请求，输入和输出设备
>   3. 不能调用 Date.now()或者 Math.random()等不纯的方法
>
> 1. `redux的reducer函数必须是一个纯函数`

### Ⅲ-store

> 1. 将 state、action、reducer 联系在一起的对象
> 2. `如何得到此对象`?
>    - import {createStore} from 'redux'
>    - import reducer from './reducers'
>    - const store = createStore(reducer)
> 3. 此对象的功能?
>    - getState(): 得到 state
>    - dispatch(action): 分发 action, 触发 reducer 调用, 产生新的 state
>    - subscribe(listener): 注册监听, 当产生了新的 state 时, 自动调用

## 3、redux 的核心 API

### Ⅰ-createstore()与 applyMiddleware()

> createstore()作用：创建包含指定 reducer 的 store 对象
>
> applyMiddleware()作用：应用上基于 redux 的中间件(插件库)
>
> ```
> //代码示例
> ---------------------------store.js 部分代码---------------------------------
> //引入createStore,专门用于创建redux中最为核心的store对象
> import {createStore,applyMiddleware} from 'redux'
> //暴露store
> export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
> ```

### Ⅱ-store 对象

> 1. 作用: redux 库最核心的管理对象
> 2. 它内部维护着:
>    - state
>    - reducer
> 3. 核心方法:
>    - getState()
>    - dispatch(action)
>    - subscribe(listener)
> 4. 具体编码:
>    - store.getState()
>    - store.dispatch({type:'INCREMENT', number})
>    - store.subscribe(render)
>
> ```
> //代码示例
> ---------------------------store.js---------------------------------
> /**
> * 该文件撰文用于暴露一个store对象,整个应用只有一个store对象
> */
> //引入createStore,专门用于创建redux中最为核心的store对象
> import {createStore,applyMiddleware} from 'redux'
> //引入汇总后的reducer
> import reducer from './reducers'
> //引入redux-thunk，用于支持异步action
> import thunk from 'redux-thunk'
> //引入redux-devtools-extension
> import {composeWithDevTools} from 'redux-devtools-extension'
> //暴露store
> export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
> ----------------------------index.js 引入store对象--------------------------------
> import React from 'react'
> import ReactDOM from "react-dom"
> import App from './App'
> import store from './redux/store'
> import {Provider} from 'react-redux'
>
> ReactDOM.render(
>   /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
>   <Provider store={store}>
>   	<App/>
>   </Provider>,
>   document.getElementById('root')
> )
> ```

### Ⅲ-combineReducers()

> 作用：合并多个 reducer 函数
>
> ```
> //代码示例
> ------------------ redux/reducers/index.js ------------------------------------
> /**
>  * 该文件用于汇总所有的reducer为一个总的reducer
>  */
> //引入combineReducers，用于汇总多个reducer
> import {combineReducers} from 'redux'
> //引入为Count组件服务的reducer
> import count from './count'
> import persons from './person'
>
> //汇总所有的reducer变为一个总的reducer
> export default combineReducers({
>   count,persons
> })
> ```

## 4、redux 异步编程

### Ⅰ-理解

> 1. redux 默认是不能进行异步处理的,
> 2. 某些时候应用中需要在`redux`中执行异步任务(ajax, 定时器)

### Ⅱ- 使用异步中间件

> 1. 下载依赖`npm install --save redux-thunk`
> 2. 使用
>
> ```
> //代码示例
> ---------------------------store.js---------------------------------
> /**
>  * 该文件撰文用于暴露一个store对象,整个应用只有一个store对象
>  */
> //引入createStore,专门用于创建redux中最为核心的store对象
> import {createStore,applyMiddleware} from 'redux'
> //引入汇总后的reducer
> import reducer from './reducers'
> //引入redux-thunk，用于支持异步action
> import thunk from 'redux-thunk'
> //引入redux-devtools-extension
> import {composeWithDevTools} from 'redux-devtools-extension'
> //暴露store
> export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
> ```

## 5、react-redux

### Ⅰ-理解

> 1. 一个 react 插件库
> 2. 专门用来简化 react 应用中使用 redux

### Ⅱ-react-Redux 将所有组件分成两大类

#### ① UI 组件

> 1. 只负责 UI 的呈现，不带有任何业务逻辑
> 2. 通过 props 接收数据(一般数据和函数)
> 3. 不使用任何 Redux 的 API
> 4. 一般保存在`components`文件夹下,也可以直接写在容器组件中直接加工成容器组件

#### ② 容器组件

> 1. 负责管理数据和业务逻辑，不负责 UI 的呈现
> 2. 使用 Redux 的 API
> 3. 一般保存在`ontainers`文件夹下

### Ⅲ-相关 API

#### ① Provider

> 作用: 让所有组件都可以得到 state 数据
>
> ```
> import React from 'react'
> import ReactDOM from "react-dom"
> import App from './App'
> import store from './redux/store'
> import {Provider} from 'react-redux'
>
> ReactDOM.render(
>   /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
>   <Provider store={store}>
>   	<App/>
>   </Provider>,
>   document.getElementById('root')
> )
> ```

#### ② `connect()()`

> 1. 作用: 用于包装 UI 组件生成容器组件
> 2. 使用 connect(`mapDispatchToProps`,`mapDispatchToProps`)(UI 组件)
>
> 注意点:
>
> 1. 该方法默认传入`state`与`dispatch`
> 2. 可以省略`dispatch`直接传入`action`方法,该 api 会自动帮你调用`dispatch`

##### Ⅰ-mapStateToProps

> 作用:将外部的数据（即`state对象`）转换为 UI 组件的标签属性
>
> 1.mapStateToProps 函数返回的是一个对象；
>
> 2.返回的对象中的 key 就作为传递给 UI 组件 props 的 key,value 就作为传递给 UI 组件 props 的 value
>
> 3.mapStateToProps`用于传递状态`
>
> ```
> function mapStateToProps(state){
>   return {count:state}
> }
> ```

##### Ⅱ-mapDispatchToProps

> 作用:将`分发action的函数`转换为 UI 组件的标签属性
>
> 1. mapDispatchToProps 函数返回的是一个对象；
> 2. 返回的对象中的 key 就作为传递给 UI 组件 props 的 key,value 就作为传递给 UI 组件 props 的 value
> 3. mapDispatchToProps`用于传递操作状态的方法`
> 4. 可以省略`dispatch`,直接传入`action`,api 将会`自动调用`dispatch

##### Ⅲ-代码示例

> ```
> ------------------------------不简化代码-----------------------------------------------
> /*
>   1.mapStateToProps函数返回的是一个对象；
>   2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
>   3.mapStateToProps用于传递状态
> */
> function mapStateToProps(state){
>   return {count:state}
> }
>
> /*
>   1.mapDispatchToProps函数返回的是一个对象；
>   2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
>   3.mapDispatchToProps用于传递操作状态的方法
> */
> function mapDispatchToProps(dispatch){
>   return {
>   	jia:number => dispatch(createIncrementAction(number)),
>   	jian:number => dispatch(createDecrementAction(number)),
>   	jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
>   }
> }
>
> //使用connect()()创建并暴露一个Count的容器组件
> export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
>
> ----------------下面是简化代码-----------------------------
> //使用connect()()创建并暴露一个Count的容器组件
> //使用connect(传入状态,操作状态方法)(UI组件)
> export default connect(
>  state => ({
>    count: state.count,
>    personCount: state.persons.length
>  }),
>  {increment, decrement, incrementAsync}
> )(Count)
> ```

## 6、使用 redux 调试工具

### Ⅰ- 安装 chrome 浏览器插件

> Redux DecTools

### Ⅱ-下载工具依赖包

> npm install --save-dev redux-devtools-extension

### Ⅲ-修改 store.js

> ```
> import {composeWithDevTools} from 'redux-devtools-extension'
> /**
> * 该文件撰文用于暴露一个store对象,整个应用只有一个store对象
> */
> //引入createStore,专门用于创建redux中最为核心的store对象
> import {createStore,applyMiddleware} from 'redux'
> //引入汇总后的reducer
> import reducer from './reducers'
> //引入redux-thunk，用于支持异步action
> import thunk from 'redux-thunk'
> //引入redux-devtools-extension
> import {composeWithDevTools} from 'redux-devtools-extension'
> //暴露store
> export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
> ```

# Ⅶ-Redux 求和案例

> 将只展示最终代码
>
> ```
> 注意`:在`reducer`中如果preState是一个数组,不可以用`push、unshift`等方法进行修改,如此修改并不会修改其引用,所以`diff`并不会判定其发生改变,`导致页面无法自动重新渲染
> 	//preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
> 	return [data,...preState]
> ```

### 1、求和案例\_redux 精简版

> (1).去除 Count 组件自身的状态
>
> (2).src 下建立:
>
> -redux
>
> -store.js
>
> -count_reducer.js
>
> (3).store.js：
>
> 1).引入 redux 中的 createStore 函数，创建一个 store
>
> 2).createStore 调用时要传入一个为其服务的 reducer
>
> 3).记得暴露 store 对象
>
> (4).count_reducer.js：
>
> 1).reducer 的本质是一个函数，接收：preState,action，返回加工后的状态
>
> 2).reducer 有两个作用：初始化状态，加工状态
>
> 3).reducer 被第一次调用时，是 store 自动触发的，
>
> 传递的 preState 是 undefined,
>
> 传递的 action 是:{type:'@@REDUX/INIT_a.2.b.4}
>
> (5).在 index.js 中监测 store 中状态的改变，一旦发生改变重新渲染
>
> 备注：redux 只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写

### 2、求和案例\_redux 完整版

> 新增文件：
>
> 1.count_action.js 专门用于创建 action 对象
>
> 2.constant.js 放置容易写错的 type 值

### 3、求和案例\_redux 异步 action 版

> (1).明确：延迟的动作不想交给组件自身，想交给 action
>
> (2).何时需要异步 action：想要对状态进行操作，但是具体的数据靠异步任务返回。
>
> (3).具体编码：
>
> 1).yarn add redux-thunk，并配置在 store 中
>
> 2).创建 action 的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
>
> 3).异步任务有结果后，分发一个同步的 action 去真正操作数据。
>
> (4).备注：异步 action 不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步 action。

### 4、求和案例\_react-redux 基本使用

> (1).明确两个概念：
>
> 1).UI 组件:不能使用任何 redux 的 api，只负责页面的呈现、交互等。
>
> 2).容器组件：负责和 redux 通信，将结果交给 UI 组件。
>
> (2).如何创建一个容器组件————靠 react-redux 的 connect 函数
>
> connect(mapStateToProps,mapDispatchToProps)(UI 组件)
>
> -mapStateToProps:映射状态，返回值是一个对象
>
> -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
>
> (3).备注 1：容器组件中的 store 是靠 props 传进去的，而不是在容器组件中直接引入
>
> (4).备注 2：mapDispatchToProps，也可以是一个对象

### 5、求和案例\_react-redux 优化

> (1).容器组件和 UI 组件整合一个文件
>
> (2).无需自己给容器组件传递 store，给包裹一个即可。
>
> (3).使用了 react-redux 后也不用再自己检测 redux 中状态的改变了，容器组件可以自动完成这个工作。
>
> (4).mapDispatchToProps 也可以简单的写成一个对象
>
> (5).一个组件要和 redux“打交道”要经过哪几步？
>
> (1).定义好 UI 组件---不暴露
>
> (2).引入 connect 生成一个容器组件，并暴露，写法如下
>
> ```
> connect(
>       state => ({key:value}), //映射状态
>       {key:xxxxxAction} //映射操作状态的方法
>      )(UI组件)
> ```
>
> (3).在 UI 组件中通过 this.props.xxxxxxx 读取和操作状态

### 6、求和案例\_react-redux 数据共享版

> (1).定义一个 Pserson 组件，和 Count 组件通过 redux 共享数据。
>
> (2).为 Person 组件编写：reducer、action，配置 constant 常量。
>
> (3).重点：Person 的 reducer 和 Count 的 Reducer 要使用 combineReducers 进行合并，合并后的总状态是一个对象！！！
>
> (4).交给 store 的是总 reducer，最后注意在组件中取出状态的时候，记得“取到位”。

### 7、求和案例\_react-redux 开发者工具的使用

> (1).yarn add redux-devtools-extension
>
> (2).store 中进行配置
>
> import {composeWithDevTools} from 'redux-devtools-extension'
>
> const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

### 8、求和案例\_react-redux 最终版

> (1).所有变量名字要规范，尽量触发对象的简写形式。
>
> (2).reducers 文件夹中，编写 index.js 专门用于汇总并暴露所有的 reducer

### 9、最终代码

#### Ⅰ-src 文件目录

> src
>
> --`containers`
>
> --Count
>
> --index.jsx
>
> --Person
>
> --index.jsx
>
> --`redux`
>
> --actions
>
> --count.js
>
> --person.js
>
> --reducers
>
> --count.js
>
> --index.js
>
> --person.js
>
> --constant.js
>
> --store.js
>
> --`App.jsx`
>
> --`index.js`

#### Ⅱ-index.js

> ```
> import React from 'react'
> import ReactDOM from "react-dom"
> import App from './App'
> import store from './redux/store'
> import {Provider} from 'react-redux'
>
> ReactDOM.render(
>   /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
>   <Provider store={store}>
>   	<App/>
>   </Provider>,
>   document.getElementById('root')
> )
> ```

#### Ⅲ-App.jsx

> ```
> import React, { Component } from 'react'
> import Count from './containers/Count' //引入的Count的容器组件
> import Person from './containers/Person' //引入的Person的容器组件
>
> export default class App extends Component {
>   render() {
>   	return (
>   		<div>
>   			<Count/>
>   			<hr/>
>   			<Person/>
>   		</div>
>   	)
>   }
> }
> ```

#### Ⅳ-redux 文件

> 1. `action`文件夹
>
> ```
> --------------------------------count.js------------------------------------------
> /**
> * 该文件专门未Count组件生成对象
> */
> import {INCREMENT,DECREMENT} from '../constant'
>
> //声明同步action,就是指action的值为Object类型的一般对象
> export const increment=data=>({type:INCREMENT,data})
> export const decrement=data=>({type:DECREMENT,data})
>
>
> //声明异步action,就是指action的值为函数,异步action中一般都会调用同步action
> //在外部调用该action方法时需要引入redux-thunk，用于支持异步action
> //该方法会自动传入dispatch
>  export const incrementAsync=(data,time)=>{
>    return (dispatch)=>{
>      setTimeout(()=>{
>        dispatch(increment(data))
>      },time)
>    }
>  }
> --------------------------------------person.js-------------------------------
> import {ADD_PERSON} from '../constant'
> //创建增加一个人的action动作对象
> export const addPerson=personObj=>({
>  type:ADD_PERSON,
>  data:personObj
> })
> ```
>
> 1. `reducers`文件夹
>
> ```
> --------------------------------count.js------------------------------------------
> /**
> * 1. 该文件时用于创建一个为Count组件服务的reducer.reducer的本质就是一个函数
> * 2. reducer函数会接到两个参数,分别为:之前状态(preState),动作对象(action)
> */
> import {
>  INCREMENT,
>  DECREMENT
> } from '../constant'
> const initState = 0 //初始化状态
> export default function countReducer(preState = initState, action) {
>  //从action对象中获取:type:data
>  const {
>    type,
>    data
>  } = action
>  //根据type决定如何加工数据
>  switch (type) {
>    case INCREMENT:
>      return preState + data
>    case DECREMENT:
>      return preState - data
>    default:
>      return preState
>  }
> }
> --------------------------------------person.js-------------------------------
> import {ADD_PERSON} from '../constant'
> //初始化人的列表
> const initState = [{id:'001',name:'tom',age:18}]
> export default function personReducer(preState=initState,action){
>   // console.log('personReducer@#@#@#');
>   const {type,data} = action
>   switch (type) {
>   	case ADD_PERSON: //若是添加一个人
>   		//preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
>   		return [data,...preState]
>   	default:
>   		return preState
>   }
> }
> --------------------------------------index.js-------------------------------
> /**
> * 该文件用于汇总所有的reducer为一个总的reducer
> */
> //引入combineReducers，用于汇总多个reducer
> import {combineReducers} from 'redux'
> //引入为Count组件服务的reducer
> import count from './count'
> import persons from './person'
>
> //汇总所有的reducer变为一个总的reducer
> export default combineReducers({
>  count,persons
> })
> ```
>
> 1. `store.js`
>
> ```
> /**
> * 该文件撰文用于暴露一个store对象,整个应用只有一个store对象
> */
> //引入createStore,专门用于创建redux中最为核心的store对象
> import {createStore,applyMiddleware} from 'redux'
> //引入汇总后的reducer
> import reducer from './reducers'
> //引入redux-thunk，用于支持异步action
> import thunk from 'redux-thunk'
> //引入redux-devtools-extension
> import {composeWithDevTools} from 'redux-devtools-extension'
> //暴露store
> export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
> ```
>
> 4.`constant.js`
>
> ```
> /**
> * 该模块是用于定义action对象中的type类型的常量值,目的只有一个:
> *  便于管理的同事防止程序员单词写错
> */
> export const INCREMENT = 'increment'
> export const DECREMENT = 'decrement'
> export const ADD_PERSON = 'add_person'
> ```

#### Ⅴ-containers

> 1. `Count`文件夹的`index.jsx`
>
> ```
> import React, { Component } from 'react'
>
> //引入action
> import {
>   increment,
>   decrement,
>   incrementAsync
> } from "../../redux/actions/count"
> //引入connect用于链接UI组件与redux
> import { connect } from 'react-redux'
>
> //定义UI组件,这个将再connect()()中加工成容器组件,就可以调用到其传入的redux状态与actions
> class Count extends Component {
>   increment = () => {
>     //获取出入内容
>     const { value } = this.selectNumber
>     this.props.increment(value * 1)
>   }
>   //减法
>   decrement = () => {
>     const { value } = this.selectNumber
>     this.props.decrement(value * 1)
>   }
>   //奇数再加
>   incrementIfOdd = () => {
>     const { value } = this.selectNumber
>     if (this.props.count % 2 !== 0) {
>       this.props.increment(value * 1)
>     }
>   }
>   //异步加
>   incrementAsync = () => {
>     const { value } = this.selectNumber
>     this.props.incrementAsync(value * 1, 500)
>   }
>
>   render() {
>     return (
>       <div>
>         <h2>我是Count组件,下方组件总人数为:{this.props.personCount}</h2>
>         <h4>当前求和为：{this.props.count}</h4>
>         <select ref={c => this.selectNumber = c}>
>           <option value="1">1</option>
>           <option value="2">2</option>
>           <option value="3">3</option>
>         </select>&nbsp;
>         <button onClick={this.increment}>+</button>&nbsp;
>         <button onClick={this.decrement}>-</button>&nbsp;
>         <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
>         <button onClick={this.incrementAsync}>异步加</button>&nbsp;
>       </div>
>     )
>   }
>
> }
>
>
> //使用connect()()创建并暴露一个Count的容器组件
> //使用connect(传入状态,操作状态方法)(UI组件)
> export default connect(
>   state => ({
>     count: state.count,
>     personCount: state.persons.length
>   }),
>   {increment, decrement, incrementAsync}
> )(Count)
> ```
>
> 1. `Person`文件夹下的 jsx
>
> ```
> import React, { Component } from 'react'
> import { connect } from 'react-redux'
> import { addPerson } from '../../redux/actions/person'
> import { nanoid } from 'nanoid'
> //创建UI组件
> class Person extends Component {
>   addPerson = () => {
>     const name = this.nameNode.value
>     const age = this.ageNode.value * 1
>     const personObj = { id: nanoid(), name, age }
>     this.props.addPerson(personObj)
>     this.nameNode.value = ''
>     this.ageNode.value = ''
>   }
>
>   render() {
>     return (
>       <div>
>         <h2>我是Person组件,上方组件求和为{this.props.count}</h2>
>         <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
>         <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
>         <button onClick={this.addPerson}>添加</button>
>         <ul>
>           {
>             this.props.persons.map((p) => {
>               return <li key={p.id}>{p.name}--{p.age}</li>
>             })
>           }
>         </ul>
>       </div>
>     )
>   }
> }
> export default connect(
>   state => ({
>     persons: state.persons,
>     count: state.count
>   }), { addPerson }
> )(Person)
> ```

# Ⅷ-React 拓展

## 1、 setState

### setState 更新状态的 2 种写法

> (1). setState(stateChange, [callback])------对象式的 setState 1.stateChange 为状态改变对象(该对象可以体现出状态的更改) 2.callback 是可选的回调函数, 它在状态更新完毕、界面也更新后(render 调用后)才被调用
>
> (2). setState(updater, [callback])------函数式的 setState
>
> - updater 为返回 stateChange 对象的函数。
> - updater 可以接收到 state 和 props。
> - callback 是可选的回调函数, 它在状态更新、界面也更新后(render 调用后)才被调用。
>
> 总结: 1.对象式的 setState 是函数式的 setState 的简写方式(`语法糖`) 2.使用原则： (1).如果新状态不依赖于原状态 ===> 使用对象方式 (2).如果新状态依赖于原状态 ===> 使用函数方式 (3).如果需要在 setState()执行后获取最新的状态数据, 要在第二个 callback 函数中读取
>
> ```
> import React, { Component } from 'react'
> export default class Demo extends Component {
> state = { count: 0 }
> add = () => {
> //对象式的setState
> /* //1.获取原来的count值
> const {count} = this.state
> //2.更新状态
> this.setState({count:count+1},()=>{ console.log(this.state.count); })
> //console.log('12行的输出',this.state.count); //0 */
> //函数式的setState
> this.setState(state => ({ count: state.count + 1 }))
> }
> render() {
> return (
> <div>
>   <h1>当前求和为：{this.state.count}</h1>
>   <button onClick={this.add}>点我+1</button>
> </div>
> )}}
> ```

---

## 2、lazyLoad

### 路由组件的 lazyLoad

> 1. 懒加载中的组件,随用随调,不会提前加载
> 2. 使用懒加载时需要给定一个`fallback`,用于请求过慢或者请求不到组件时显示,通常为`组件`(也可以直接为一个`虚拟DOM`)
> 3. `fallback`如果是指定为一个组件,则该组件一定不能指定为`懒加载组件`,就正常引入的那种组件即可

```
//	import Loading from './Loading' // 用于指定`fallback`
//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
    //<Suspense fallback={<Loading/>}>   指定为组件
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

---

## 3、Hooks

> 详见隔壁文件夹`React Hooks`笔记

#### 1. React Hook/Hooks 是什么?

> (1). Hook 是 React 16.8.0 版本增加的新特性/新语法 (2). 可以让你在函数组件中使用 state 以及其他的 React 特性

#### 2. 三个常用的 Hook

> (1). State Hook: React.useState() (2). Effect Hook: React.useEffect() (3). Ref Hook: React.useRef()

#### 3. State Hook

> (1). State Hook 让函数组件也可以有 state 状态, 并进行状态数据的读写操作 (2). 语法: const [xxx, setXxx] = React.useState(initValue)
> (3). useState()说明: 参数: 第一次初始化指定的值在内部作缓存 返回值: 包含 2 个元素的数组, 第 1 个为内部当前状态值, 第 2 个为更新状态值的函数 (4). setXxx()2 种写法: setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值 setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

#### 4. Effect Hook

> (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子) (2). React 中的副作用操作: 发 ajax 请求数据获取 设置订阅 / 启动定时器 手动更改真实 DOM (3). 语法和说明: useEffect(() => { // 在此可以执行任何带副作用操作 return () => { // 在组件卸载前执行 // 在此做一些收尾工作, 比如清除定时器/取消订阅等 } }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次 render()后执行
>
> (4). 可以把 useEffect Hook 看做如下三个函数的组合 componentDidMount() componentDidUpdate() componentWillUnmount()

#### 5. Ref Hook

> (1). Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数据 (2). 语法: const refContainer = useRef() (3). 作用:保存标签对象,功能与 React.createRef()一样
>
> ```
>   myRef = React.createRef()
>   show = ()=>{
>   	alert(this.myRef.current.value)
>   }
> ```

---

## 4、 Fragment

> 1. 作用:可以不用必须有一个真实的 DOM 根标签了
>
> 2. 当你不得不使用一个`容器`去包裹 dom 元素--jsx 语法要求,以往我们做法是直接包一层`div`
>
> 3. 使用`Fragment`后可以`取代div`,但是编译后会被 react 丢弃,所以不会造成没必要的层级嵌套
>
> 4. 效果等同于直接写一个`空标签<></>`,但是二者有区别
>
>    `区别`:`Fragment`可以添加`key`属性作为唯一标识,而空标签一点属性都不能加
>
> ```
> import React, { Component,Fragment } from 'react'
>
> export default class Demo extends Component {
>   render() {
>   	return (
>   		<Fragment key={1}>
>   			<input type="text"/>
>   			<input type="text"/>
>   		</Fragment>
>   	)
>   }
> }
> ```

## 5、Context

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信
>
> 1. 创建 Context 容器对象：
>
> ```
> 	const XxxContext = React.createContext()
> ```
>
> 1. 渲染子组时，外面包裹`xxxContext.Provider`, 通过 value 属性给后代组件传递数据：
>
> ```
> <xxxContext.Provider value={数据}>		子组件 </xxxContext.Provider>
> ```
>
> 1. 后代组件读取数据：`两种方法`
>
> ```
> 	//第一种方式:仅适用于类组件 	  static contextType = xxxContext  // 声明接收context	  this.context // 读取context中的value数据	//第二种方式: 函数组件与类组件都可以	  <xxxContext.Consumer>	    {	      value => ( // value就是context中的value数据	        要显示的内容	      )	    }	  </xxxContext.Consumer>
> ```
>
> 注意:在应用开发中`一般不用context`, 一般都用它的封装 react 插件
>
> 4)完整例子:
>
> ```
> //------------------- 完整例子 ------------------------------------------------
> import React, { Component } from 'react'
> import './index.css'
> //创建Context对象
> const MyContext = React.createContext()
> const {Provider,Consumer} = MyContext
> export default class A extends Component {
>
> 	state = {username:'tom',age:18}
>
> 	render() {
> 		const {username,age} = this.state
> 		return (
> 			<div className="parent">
> 				<h3>我是A组件</h3>
> 				<h4>我的用户名是:{username}</h4>
> 				<Provider value={{username,age}}>
> 					<B/>
> 				</Provider>
> 			</div>
> 		)
> 	}
> }
>
> class B extends Component {
> 	render() {
> 		return (
> 			<div className="child">
> 				<h3>我是B组件</h3>
> 				<C/>
> 			</div>
> 		)
> 	}
> }
>
> /* class C extends Component {
> 	//声明接收context
> 	static contextType = MyContext
> 	render() {
> 		const {username,age} = this.context
> 		return (
> 			<div className="grand">
> 				<h3>我是C组件</h3>
> 				<h4>我从A组件接收到的用户名:{username},年龄是{age}</h4>
> 			</div>
> 		)
> 	}
> } */
>
> function C(){
> 	return (
> 		<div className="grand">
> 			<h3>我是C组件</h3>
> 			<h4>我从A组件接收到的用户名:
> 			<Consumer>
> 				{value => `${value.username},年龄是${value.age}`} //也可以返回标签
> 			</Consumer>
> 			</h4>
> 		</div>
> 	)
> }
> ```

---

## 6、组件优化 --`PureComponent`

> **Ⅰ-`Component的2个问题`**
>
> 1. 只要执行 setState(),即使不改变状态数据, 组件也会重新 render() ==> 效率低
> 2. 只当前组件重新 render(), 就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
>
> **Ⅱ-效率高的做法:**
>
> 只有当组件的 state 或 props 数据发生改变时才重新 render()
>
> **Ⅲ-原因解析**
>
> Component 中的 shouldComponentUpdate()总是返回 true

#### 优化解决

> 办法 1: `重写shouldComponentUpdate()`方法 比较新旧 state 或 props 数据, 如果有变化才返回 true, 如果没有返回 false 办法 2:
> 使用`PureComponent` PureComponent 重写了 shouldComponentUpdate(), 只有 state 或 props 数据有变化才返回 true 注意: 只是进行 state 和 props 数据的`浅比较`, 如果只是数据对象内部数据变了, 返回 false
> 不要直接修改 state 数据, 而是要`产生新数据` 项目中一般使用 PureComponent 来优化
>
> **优化代码示例:**
>
> ```
> import React, { PureComponent } from 'react'
> import './index.css'
> export default class Parent extends PureComponent {
>  state = { carName: "奔驰c36", stus: ['小张', '小李', '小王'] }
>  addStu = () => {
>    /* const {stus} = this.state
>    stus.unshift('小刘')
>    this.setState({stus}) */
>    const { stus } = this.state
>    this.setState({ stus: ['小刘', ...stus] })
>  }
>
>  changeCar = () => {
>    //this.setState({carName:'迈巴赫'})
>
>    const obj = this.state
>    obj.carName = '迈巴赫'
>    console.log(obj === this.state);
>    this.setState(obj)
>  }
>
>  /* shouldComponentUpdate(nextProps,nextState){
>    // console.log(this.props,this.state); //目前的props和state
>    // console.log(nextProps,nextState); //接下要变化的目标props，目标state
>    return !this.state.carName === nextState.carName
>  } */
>
>  render() {
>    console.log('Parent---render');
>    const { carName } = this.state
>    return (
>      <div className="parent">
>        <h3>我是Parent组件</h3>
>        {this.state.stus}&nbsp;
>        <span>我的车名字是：{carName}</span><br />
>        <button onClick={this.changeCar}>点我换车</button>
>        <button onClick={this.addStu}>添加一个小刘</button>
>        <Child carName="奥拓" />
>      </div>
>    )
>  }
> }
>
> class Child extends PureComponent {
>  /* shouldComponentUpdate(nextProps,nextState){
>    console.log(this.props,this.state); //目前的props和state
>    console.log(nextProps,nextState); //接下要变化的目标props，目标state
>    return !this.props.carName === nextProps.carName
>  } */
>  render() {
>    console.log('Child---render');
>    return (
>      <div className="child">
>        <h3>我是Child组件</h3>
>        <span>我接到的车是：{this.props.carName}</span>
>      </div>
>    )
>  }
> }
> ```

---

## 7、 render props ---类似 vue 插槽

> 1. 如何向组件内部动态传入带内容的结构(标签)?
>
> Vue 中: 使用 slot 技术, 也就是通过组件标签体传入结构 React 中: 使用 children props: 通过组件标签体传入结构 使用 render props: 通过组件标签属性传入结构,而且可以携带数据，一般用 render 函数属性
>
> 1. children props
>
> ```
> <A>
>   <B>xxxx</B>
> </A>
> {this.props.children}
> 问题: 如果B组件需要A组件内的数据, ==> 做不到
> ```
>
> 1. render props
>
> ```
> <A render={(data) => <C data={data}></C>}></A>
> A组件: {this.props.render(内部state数据)}
> C组件: 读取A组件传入的数据显示 {this.props.data}
> ```
>
> 1. 示例
>
> ```
> import React, { Component } from 'react'
> import './index.css'
> import C from '../1_setState'
>
> export default class Parent extends Component {
> 	render() {
> 		return (
> 			<div className="parent">
> 				<h3>我是Parent组件</h3>
> 				<A render={(name)=><C name={name}/>}/>
> 			</div>
> 		)
> 	}
> }
>
> class A extends Component {
> 	state = {name:'tom'}
> 	render() {
> 		console.log(this.props);
> 		const {name} = this.state
> 		return (
> 			<div className="a">
> 				<h3>我是A组件</h3>
> 				{this.props.render(name)}
> 			</div>
> 		)
> 	}
> }
>
> class B extends Component {
> 	render() {
> 		console.log('B--render');
> 		return (
> 			<div className="b">
> 				<h3>我是B组件,{this.props.name}</h3>
> 			</div>
> 		)
> 	}
> }
> ```

---

## 8、错误边界

> 1. 理解：
>
> 错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面
>
> 1. 特点：
>
> `只能捕获后代组件生命周期`产生的错误，`不能捕获自己组件`产生的错误和其他组件在合成事件、定时器中产生的错误
>
> 1. getDerivedStateFromError 配合 componentDidCatch
>
> ```
> // 生命周期函数，一旦后台组件报错，就会触发static getDerivedStateFromError(error) {    console.log(error);    // 在render之前触发    // 返回新的state    return {        hasError: true,    };}componentDidCatch(error, info) {    // 统计页面的错误。发送请求发送到后台去    console.log(error, info);}
> ```
>
> 1. 代码示例
>
> ```
> import React, { Component } from 'react'import Child from './Child'export default class Parent extends Component {  state = {    hasError: '' //用于标识子组件是否产生错误  }  //当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息  static getDerivedStateFromError(error) {    console.log('@@@', error);    return { hasError: error }  }  componentDidCatch() {    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');  }  render() {    return (      <div>        <h2>我是Parent组件</h2>        {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}      </div>    )  }}
> ```

## 9、 组件通信方式总结

> 1. 组件间的关系：
>
> - 父子组件
> - 兄弟组件（非嵌套组件）
> - 祖孙组件（跨级组件）
>
> 1. 几种通信方式：
>
>    ```
>    - props：     1).children props     (2).render props- 消息订阅-发布：     ubs-sub、event等等- 集中式管理：     edux、dva等等- conText:     产者-消费者模式
>    ```
>
> 2. 比较好的搭配方式
>
>    ```
>    - 父子组件：props- 兄弟组件：消息订阅-发布、集中式管理- 祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
>    ```

# Ⅸ-组件间通信示例

## 1、兄弟间传值方式 1 --> [子传父、父传子]

> 1. 父组件定义一个[`状态`]或[`方法`],其中[方法]能修改[状态]
>
> - 将[方法]传给要进行发送值的子组件,通过继承到的[方法],去修改父组件的[状态]
> - 将[状态]传给要接受值的子组件,这样就能做到兄弟间传值
>
> 1. 代码示例
>
> ```
> ----------父组件------------------------
> class Main extends React.Component<IProps> {
>   constructor(props) {
>     super(props);
>     this.state = { searchParams: {} };
>   }
>   handleIPSearch = (params) => {
>     this.setState({ searchParams: params });
>   };
>   render() {
>     <子组件1:要对组件2进行修改的 handleIPSearch={handleIPSearch}  />
>     <子组件2:要接受值的    searchParams={this.state.searchParams}/>
>   }
> }
> --------------子组件1----------------------
> const ManageTable = (props: IProps) => {
>  const {  handleIPSearch } = props;
>  return(
>      //此处即可调用修改父组件状态的函数
>     <a onClick={() => {   handleIPSearch(data) }} >
>     对父组件值进行修改,间接改变组件2接收到的值
>   </a>)
> }
> --------------子组件2----------------------
> const IPInfo: FC = (props) => {
>     //此处就能使用父组件的状态
>   const { searchParams } = props;
>     return( <span>searchParams</span> )
> }
> ```

## 2、兄弟间传值方式 2 -->[mitt(发布订阅者模式)]

> 此方法用的是[`mitt`]实现,其实本质上就是注册一个全局变量进行监听 --> [mitt 源码地址](https://github.com/developit/mitt)
>
> 可以自己实现,此处因为人家写的不错了,就以此作为例子
>
> 1. 安装或者直接复制使用
>
> ```
> npm install --save mitt
> ```
>
> 1. 使用示例
>
> ```
> -------------- 首先要定义一个公用全局变量  --------------------------
> //文件 utils/index.ts
> import mitt from './mitt';
> //此处声明,将其变为全局变量
> const eventBus = mitt();
> export { eventBus }
> ---------------- 发送值的组件(要修改别人的组件)  ---------------------
> //导入共有变量
> import { eventBus } from '~/utils';
>   <a
>   onClick={() => {
> 	//延迟发送是本人此之前有一个跳转动作,跳转到接收方组件
>     // 防止修改了值的时候但是接收组件未注册  正常情况直接发送即可
>     //setTimeout(() => {
>     // eventBus.emit('foo', data);
>     //}, 100);
>     eventBus.emit('foo', data);
>    }}
>   />;
>
> ------------------ 接受方组件(接受发送方的组件)  -------------------------------------
>
> const Search: FC<IProps> = (props) => {
>   useEffect(() => {
>     //替换为mitt写法,此时已经接收到了
>     eventBus.on('foo', (searchParams) => {console.log('接受到值了',searchParams) }
>     });
>   }, []);
> }
> ```
>
> 1. mitt 源码
>
> ```
> export type EventType = string | symbol;
>
> // An event handler can take an optional event argument
> // and should not return a value
> export type Handler<T = unknown> = (event: T) => void;
> export type WildcardHandler<T = Record<string, unknown>> = (
>   type: keyof T,
>   event: T[keyof T]
> ) => void;
>
> // An array of all currently registered event handlers for a type
> export type EventHandlerList<T = unknown> = Array<Handler<T>>;
> export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<
>   WildcardHandler<T>
> >;
>
> // A map of event types and their corresponding event handlers.
> export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
>   keyof Events | '*',
>   EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
> >;
>
> export interface Emitter<Events extends Record<EventType, unknown>> {
>   all: EventHandlerMap<Events>;
>
>   on: (<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>) => void) & ((type: '*', handler: WildcardHandler<Events>) => void);
>
>   off: (<Key extends keyof Events>(
>     type: Key,
>     handler?: Handler<Events[Key]>
>   ) => void) & ((type: '*', handler: WildcardHandler<Events>) => void);
>
>   emit: (<Key extends keyof Events>(type: Key, event: Events[Key]) => void) & (<Key extends keyof Events>(
>     type: undefined extends Events[Key] ? Key : never
>   ) => void);
> }
>
> /**
>  * Mitt: Tiny (~200b) functional event emitter / pubsub.
>  * @name mitt
>  * @returns {Mitt}
>  */
> export default function mitt<Events extends Record<EventType, unknown>>(
>   all?: EventHandlerMap<Events>
> ): Emitter<Events> {
>   type GenericEventHandler =
>     | Handler<Events[keyof Events]>
>     | WildcardHandler<Events>;
>   all = all || new Map();
>
>   return {
>     /**
>      * A Map of event names to registered handler functions.
>      */
>     all,
>
>     /**
>      * Register an event handler for the given type.
>      * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
>      * @param {Function} handler Function to call in response to given event
>      * @memberOf mitt
>      */
>     on<Key extends keyof Events>(type: Key, handler: GenericEventHandler) {
>       const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
>       if (handlers) {
>         handlers.push(handler);
>       } else {
>         all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>);
>       }
>     },
>
>     /**
>      * Remove an event handler for the given type.
>      * If `handler` is omitted, all handlers of the given type are removed.
>      * @param {string|symbol} type Type of event to unregister `handler` from, or `'*'`
>      * @param {Function} [handler] Handler function to remove
>      * @memberOf mitt
>      */
>     off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
>       const handlers: Array<GenericEventHandler> | undefined = all!.get(type);
>       if (handlers) {
>         if (handler) {
>           handlers.splice(handlers.indexOf(handler) >>> 0, 1);
>         } else {
>           all!.set(type, []);
>         }
>       }
>     },
>
>     /**
>      * Invoke all handlers for the given type.
>      * If present, `'*'` handlers are invoked after type-matched handlers.
>      *
>      * Note: Manually firing '*' handlers is not supported.
>      *
>      * @param {string|symbol} type The event type to invoke
>      * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
>      * @memberOf mitt
>      */
>     emit<Key extends keyof Events>(type: Key, evt?: Events[Key]) {
>       let handlers = all!.get(type);
>       if (handlers) {
>         (handlers as EventHandlerList<Events[keyof Events]>)
>           .slice()
>           .map((handler) => {
>             handler(evt!);
>           });
>       }
>
>       handlers = all!.get('*');
>       if (handlers) {
>         (handlers as WildCardEventHandlerList<Events>)
>           .slice()
>           .map((handler) => {
>             handler(type, evt!);
>           });
>       }
>     },
>   };
> }
> ```
