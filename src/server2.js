const { response } = require('express')
const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log('有人请求了服务器')
  next()
})
app.get('/student', (res, req) => {
  const students = [
    { name: '五' },
    { name: '六' }
  ]
  req.send(JSON.stringify(students))
})

app.listen(9091, () => {
  console.log('9091服务器已经启动')
})