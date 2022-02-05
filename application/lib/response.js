/*
 * @Author: 小方块 
 * @Date: 2022-02-06 01:07:54 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-06 01:30:34
 */
const response = {
  _body: '',
  get body() {
    return this._body
  },
  set body(val) {
    this._body = val
  }
}
module.exports = response