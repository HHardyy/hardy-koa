/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:58 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 01:36:07
 */
const Application = require('./application/lib/application')

const app = new Application()

app.use((ctx) => {
  // request
  // console.log(ctx.req.url);
  // console.log(ctx.request.req.url);
  // console.log(ctx.request.url);
  // console.log(ctx.url);

  // response
  ctx.response.body = 'hardy'
  console.log(ctx.body);

  ctx.body = 'hardy'
  console.log(ctx.response.body);
})

app.listen(3000, () => {
  console.log('start at 3000');
})