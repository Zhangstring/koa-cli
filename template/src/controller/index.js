/*
 * @Author: zxj
 * @Date: 2020-12-01 15:42:48
 * @LastEditors: zxj
 * @LastEditTime: 2020-12-01 15:46:45
 * @FilePath: /mall-tool/src/controller/index.js
 */
const testService = require('../services/index')
const test = async ctx => {
    ctx.body = await testService.test()
  }
  
  module.exports ={
    test
  }