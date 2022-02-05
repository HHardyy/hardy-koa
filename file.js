/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:58 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 02:44:48
 */
const fs = require('fs')
const path = require('path')
const Application = require('./application')

const app = new Application()

const log = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('logger');
      resolve()
    }, 3000);
  })
}

app.use(async (ctx, next) => {
  let stream = fs.createReadStream(path.resolve(__dirname, 'server.js'))
  ctx.body = stream
})

app.listen(3000, () => {
  console.log('start at 3000');
})