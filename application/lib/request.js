/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:40 
 * @Last Modified by:   小方块 
 * @Last Modified time: 2022-02-06 01:07:40 
 */
const url = require('url')

const request = {
  get url() {
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url, true).pathname
  },
  get query() {
    return url.parse(this.req.url, true).query
  },
  get headers() {
    return this.req.headers
  },
  get method() {
    return this.req.method
  }
}

module.exports = request