const { response } = require('express')
const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log('有人请求了服务器')
  next()
})
app.get('/', (res, req) => {
  req.send('hello world')
})

app.listen(9090, () => {
  console.log('9090服务器已经启动')
})