/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:58 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 02:21:34
 */
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
  console.log(1);
  next()
  console.log(2);
})
app.use(async (ctx, next) => {
  console.log(3);
  // await log()
  await next()
  console.log(4);
})
app.use(async (ctx, next) => {
  console.log(5);
  await next()
  console.log(6);
})

app.listen(3000, () => {
  console.log('start at 3000');
})