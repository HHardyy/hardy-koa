/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:43 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 01:29:14
 */
const EventEmmiter = require('events')
const http = require('http')

const context = require('./context')
const request = require('./request')
const response = require('./response')

class Application extends EventEmmiter {
  constructor() {
    super()

    // 防止多个实例共享同一个
    this._context = Object.create(context)
    this._request = Object.create(request)
    this._response = Object.create(response)
  }
  _createContext(req, res) {
    // 每次请求都产生一个全新的执行上下文
    const _context = Object.create(this._context)
    const _request = Object.create(this._request)
    const _response = Object.create(this._response)

    _context.request = _request
    _context.response = _response

    _context.request.req = _context.req = req
    _context.response.res = _context.res = res

    return _context
  }
  _handleRequest(req, res) {
    const _ctx = this._createContext(req, res)
    this._cb(_ctx)
  }
  use(cb) {
    this._cb = cb
  }
  listen(...args) {
    const server = http.createServer(this._handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Application