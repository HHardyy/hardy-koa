/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:49 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 01:35:40
 * 
 * 实际上的koa源码使用的是dalegates包实现的代理
 */
const context = {}

function defineGetter(target, key) {
  // 等价于 Object.defineProperty
  context.__defineGetter__(key, function () {
    return this[target][key]
  })
}

function defineSetter(target, key) {
  context.__defineSetter__(key, function (val) {
    this[target][key] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('request', 'query')
defineGetter('request', 'headers')
defineGetter('request', 'method')

defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = context